<template>
  <div>
    this is home
    <h1>{{$route.params.id}}</h1>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
</style>