import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/news/:id',
    name: 'newsId',
    component: () => import('../views/NewsDetailView.vue')
  },
  {
    path: '/:page(news.*)',
    name: 'news',
    component: () => import('../views/NewsView.vue')
  },
  {
    path: '/company',
    name: 'company',
    component: () => import('../views/CompanyView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
