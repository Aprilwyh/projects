<template>
  <div id="app">
    this is app
    <!-- <button @click="passMsg">非父子传递</button>
    <m-parent :msga="a" :msgb="b" :msgc="c"></m-parent>-->
    <router-link to="/home">home</router-link>
    <button @click="toHome">home</button>
    <router-view></router-view>
  </div>
</template>

<script>
  import bus from './util/bus.js'
  import MParent from './views/Parent.vue'
  export default {
    data() {
      return {
        a: 'msga',
        b: 'msga',
        c: 'msga'
      }
    },
    components: {
      MParent
    },
    methods: {
      passMsg() {
        bus.$emit('msg', 'from App')
      },
      toHome() {
        // this.$router.push({ path: '/home', query: { name: 'Tom' } })
        this.$router.push({ name: 'home', params: { id: 3 } })
      }
    }
  }
</script>
<style>
</style>
