import Vue from 'vue'
import axios from 'axios'

const store = {
  currentUser: null
}

const API = {
  fetchCurrentUser () {
    if (store.currentUser) return
    axios.get('http://localhost:8080/me')
      .then((res) => {
        store.currentUser = res.data
      })
  }
}

Vue.mixin({
  data () {
    return {
      store
    }
  },
  computed: {
    API () {
      return API
    }
  }
})

export default store
