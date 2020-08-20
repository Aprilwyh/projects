<template>
  <div>
    <main-header></main-header>
    <main-todo></main-todo>
    <main-footer></main-footer>
  </div>
</template>

<script>
  import './assets/styles/global.styl'

  import mainHeader from './components/mainHeader.vue'
  import mainTodo from './components/mainTodo/mainTodo.vue'
  import mainFooter from './components/mainFooter.vue'

  export default {
    name: 'App',
    components: {
      // 挂载
      mainHeader,
      mainTodo,
      mainFooter
    }
  }
</script>

<style lang="stylus" scoped></style>