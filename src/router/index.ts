import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import routesJson from '@/router/routes.js'

const routes: Array<RouteRecordRaw> = [
  ...(routesJson as { path: string; name: string; view?: string }[]).map(r => {
    const view = r.view ?? r.path.substr(1)
    return {
      path: r.path,
      name: r.name,
      component: () => import('../views/' + view + '.vue')
    }
  }),
  {
    path: '/:catchAll(.*)',
    component: () => import('../views/404.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
