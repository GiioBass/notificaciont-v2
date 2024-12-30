import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import NotificationFCM from '@/components/NotificationFCM.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/notification-fcm',
    name: 'NotificationFCM',
    component: NotificationFCM
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router