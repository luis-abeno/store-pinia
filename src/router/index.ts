import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/product/:id',
      name: 'product',
      component: () => import('../views/ProductView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/Contact/ContactView.vue')
    }
  ]
})

export default router
