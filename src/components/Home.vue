<template>
  <div class="ui segment">
    <h2 class="ui header">Home Component</h2>
    <span v-if="username">Hello, {{ username }}</span>
  </div>
</template>

<script>
export default {
  created () {
    this.API.fetchCurrentUser()
  },
  computed: {
    username () {
      return this.store.currentUser && this.store.currentUser.username || ''
    }
  }
}
</script>
