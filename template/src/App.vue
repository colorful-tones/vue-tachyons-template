<template>
  <div id="app" class="tc mt5">
    <img src="./assets/logo.png">
    <h1 class="f2 mb4">{{ msg }}</h1>
    <h2 class="f4 mb3">Essential Links</h2>
    <ul class="list dib mt0 mb4">
      <li class="dib"><a class="link pa2" href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li class="dib"><a class="link pa2" href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li class="dib"><a class="link pa2" href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li class="dib"><a class="link pa2" href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h2 class="f4 mb3">Ecosystem</h2>
    <ul class="list dib mt0 mb4">
      <li class="dib"><a class="link pa2" href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li class="dib"><a class="link pa2" href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li class="dib"><a class="link pa2" href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li class="dib"><a class="link pa2" href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
</style>
