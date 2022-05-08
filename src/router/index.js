import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import JuzAmma from '../views/JuzAmma.vue'
import JuzSatu from '../views/JuzSatu.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/juzamma',
      name: 'juzamma',
      component: JuzAmma
    },
    {
      path: '/juz1-5',
      name: 'juz1-5',
      component: JuzSatu
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
