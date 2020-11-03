import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

function page(name: string, path: string) {
  return {
    path,
    name,
    component: () => import('../views' + path + '.vue')
  }
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/index.vue')
  },
  page('About', '/about'),
  page('Social Media', '/social'),
  page('Awesome projects', '/awesome')
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
