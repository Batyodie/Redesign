import Vue from 'vue'
import VueRouter from 'vue-router'
import profilePage from '../views/profilePage'
import feedPage from '../views/feedPage'
import networkPage from '../views/networkPage'
import jobsPage from '../views/jobsPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: ' profilePage',
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
  },
  {
    path: '/networkPage',
    name: 'networkPage',
    component: networkPage

  },
  {
    path: '/jobsPage',
    name: 'jobsPage',
    component: jobsPage

  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
