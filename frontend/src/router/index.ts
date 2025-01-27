import { createRouter, createWebHistory } from 'vue-router'
import AdminPage from '../views/adminPages/AdminPage.vue'
import ClientsPage from '../views/adminPages/ClientsPage.vue'
import ServicesPage from '../views/adminPages/ServicesPage.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
    {
      path: '/dashboard',
      name: 'AdminPage',
      component: AdminPage,
      meta: { requiresAuth: true }
    },
    {
      path: '/clients',
      name: 'ClientsPage',
      component: ClientsPage,
      meta: { requiresAuth: true }
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/services',
      name: 'ServicesPage',
      component: ServicesPage
    }
  ],
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('authToken'); // Verificar si el token existe

  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Si la ruta requiere autenticación y no estamos autenticados, redirigir al login
    if (!isAuthenticated) {
      next({ name: 'LoginPage' });
    } else {
      next(); // Continuar con la navegación
    }
  } else {
    next(); // Continuar con la navegación si la ruta no requiere autenticación
  }
});

export default router
