<template>
  <div>
    <h3>Child</h3>
    {{msg}}
    <button @click="passMsg">点击</button>
  </div>
</template>

<script>
  export default {
    props: {
      msg: {
        type: String,
        default: ''
      }
    },
    methods: {
      passMsg() {
        this.$emit('showMsg', 'from Child')
      }
    }
  }
</script>

<style scoped>
</style>