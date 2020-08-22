<template>
  <div>
    <h3>Child</h3>
    {{msg}}
    <br />
    {{childVal}}
    <br />
    <button @click="passMsg">父子传递</button>
  </div>
</template>

<script>
  import bus from '../util/bus.js'
  export default {
    props: {
      msg: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        childVal: ''
      }
    },
    methods: {
      passMsg() {
        this.$emit('showMsg', 'from Child')
      }
    },
    mounted() {
      console.log('attrs', this.$attrs)
      bus.$on('msg', val => {
        this.childVal = val
      })
    }
  }
</script>

<style scoped>
</style>