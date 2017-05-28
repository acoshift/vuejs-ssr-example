import Vue from 'vue'

import App from './App'
import router from './router'
import './store'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  ...App
})
