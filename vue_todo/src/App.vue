<template>
  <div>
    <main-header></main-header>
    <main-todo></main-todo>
  </div>
</template>

<script>
  import './assets/styles/global.styl'

  import mainHeader from './components/mainHeader.vue'
  import mainTodo from './components/mainTodo/mainTodo.vue'

  export default {
    name: 'App',
    components: {
      // 挂载
      mainHeader,
      mainTodo
    }
  }
</script>

<style lang="stylus" scoped></style>