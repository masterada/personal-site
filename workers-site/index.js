import { getAssetFromKV, mapRequestToAsset } from '@cloudflare/kv-asset-handler'
import routes from './routes.js'

/**
 * The DEBUG flag will do two things that help during development:
 * 1. we will skip caching on the edge, which makes it easier to
 *    debug.
 * 2. we will return an error message on exception in your Response rather
 *    than the default 404.html page.
 */
const DEBUG = false

addEventListener('fetch', event => {
  try {
    event.respondWith(handleEvent(event))
  } catch (e) {
    if (DEBUG) {
      return event.respondWith(
        new Response(e.message || e.toString(), {
          status: 500,
        }),
      )
    }
    event.respondWith(new Response('Internal Error', { status: 500 }))
  }
})

async function handleEvent(event) {
  let options = {}

  let is404 = false
  options.mapRequestToAsset = req => {
    const origPath = new URL(req.url).pathname.trimEnd()

    // First let's apply the default handler, which we imported from
    // '@cloudflare/kv-asset-handler' at the top of the file. We do
    // this because the default handler already has logic to detect
    // paths that should map to HTML files, for which it appends
    // `/index.html` to the path.
    req = mapRequestToAsset(req)

    // Now we can detect if the default handler decided to map to
    // index.html in some specific directory.
    if (req.url.endsWith('/index.html')) {
      if (!routes.find(r => r.path === origPath)) {
        // requesting not found html file
        is404 = true
      }
      return new Request(`${new URL(req.url).origin}/index.html`, req)
    } else {
      // The default handler decided this is not an HTML page. It's probably
      // an image, CSS, or JS file. Leave it as-is.
      return req
    }
  }

  try {
    if (DEBUG) {
      // customize caching
      options.cacheControl = {
        bypassCache: true,
      }
    }
    const resp = await getAssetFromKV(event, options)
    if (is404) {
      return new Response(resp.body, { ...resp, status: 404 })
    }
    return resp
  } catch (e) {
    // if an error is thrown try to serve the asset at 404.html
    if (!DEBUG) {
      try {
        let notFoundResponse = await getAssetFromKV(event, {
          mapRequestToAsset: req => new Request(`${new URL(req.url).origin}/index.html`, req),
        })

        return new Response(notFoundResponse.body, { ...notFoundResponse, status: 404 })
      } catch (e) {}
      return new Response("", { status: 404 })
    }

    return new Response(e.message || e.toString(), { status: 500 })
  }
}
