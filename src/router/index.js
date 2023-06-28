import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../pages/Home.vue'

import ShowView from '../pages/Show.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/article/:id',
      name: 'show',
      component: ShowView
    }
  ]
})

export default router
