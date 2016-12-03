import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home'
import About from './components/About'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '*', redirect: '/' }
  ]
})

export default router
