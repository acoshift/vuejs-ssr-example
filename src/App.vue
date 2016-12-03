<template>
  <div id="app" class="ui basic segment">
    <h1 class="ui header">App Component</h1>
    <router-link to="/" class="ui button">Home</router-link>
    <router-link to="/about" class="ui button">About</router-link>
    <router-view></router-view>
  </div>
</template>
