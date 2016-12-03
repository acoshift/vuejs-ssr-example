import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

export default (context) => {
  router.push(context.url)
  Object.assign(store, context.store)
  return Promise.resolve(new Vue({
    router,
    ...App
  }))
}
