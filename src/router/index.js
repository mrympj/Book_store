import Vue from 'vue'
import VueRouter from 'vue-router'
import booklist from '../page/booklist.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'list',
    component: booklist
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: () => import('../page/bookdetail.vue')
  },
  {
    path: '/bookregistration',
    name: 'bookregistration',
    component: () => import('../page/bookregistration.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
