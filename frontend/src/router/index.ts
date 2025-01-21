import { createRouter, createWebHistory } from 'vue-router'
import AdminPage from '../views/AdminPage.vue'
import ClientsPage from '../views/ClientsPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'AdminPage',
      component: AdminPage,
    },
    {
      path: '/clients',
      name: 'ClientsPage',
      component: ClientsPage,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
