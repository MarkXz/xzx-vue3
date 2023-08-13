import { createRouter, createWebHistory } from 'vue-router'

import Login from "@/views/login/index.vue"
import Layout from "@/views/layout/index.vue"
import Home from "@/views/home/index.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Layout,
      children: [{
        path: 'home',
        name: 'home',
        component: Home,
      }]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
  ]
})

export default router
