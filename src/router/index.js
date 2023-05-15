import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/qr',
      name: 'qr',
      component: () => import('../views/QrView.vue')
    },
    {
      path: '/qr/receive',
      name: 'qreceive',
      component: () => import('../views/ReceivePayment.vue')
    },
    {
      path: '/pay/detail/:id',
      name: 'paydetail',
      component: () => import('../views/PayDetail.vue')
    },
    {
      path: '/scanner',
      name: 'scanner',
      component: () => import('../views/Scanner.vue')
    },
    {
      path: '/input/phone/:phone',
      name: 'InputPhone',
      // props: true,
      component: () => import('../views/InputPhone.vue'),
    }

  ]
})

export default router
