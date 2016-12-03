import Vue from 'vue'

import '!script!jquery/dist/jquery.min.js'
import '!script!semantic-ui-css/semantic.min.js'
import '!style!css!semantic-ui-css/semantic.min.css'

import App from './App'
import router from './router'
import './store'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  ...App
})
