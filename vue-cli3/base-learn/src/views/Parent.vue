<template>
  <div>
    <h1>Parent</h1>
    <m-child msg="from Parent msg" @showMsg="showMsg" ref="child"></m-child>
    {{msg}}
  </div>
</template>

<script>
  import MChild from './Child'
  export default {
    data() {
      return {
        msg: ''
      }
    },
    components: {
      MChild
    },
    methods: {
      showMsg(val) {
        this.msg = val
      }
    },
    mounted() {
      console.log(this.$children)
      console.log('ref', this.$refs.child)
    }
  }
</script>

<style scoped>
</style>