import Vue from 'vue'
import VueRouter from 'vue-router'
import profilePage from '../views/profilePage'
import feedPage from '../views/feedPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: profilePage
  },
  {
    path: '/profilePage',
    name: 'profilePage',
    component: profilePage
  },
  {
    path: '/feedPage',
    name: 'feedPage',
    component: feedPage

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
