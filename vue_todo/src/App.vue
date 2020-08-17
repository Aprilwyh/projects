<template>
  <div>
    <main-header></main-header>
  </div>
</template>

<script>
  import './assets/styles/global.styl'

  import mainHeader from './components/mainHeader.vue'

  export default {
    name: 'App',
    components: {
      mainHeader
    }
  }
</script>

<style lang="stylus" scoped></style>