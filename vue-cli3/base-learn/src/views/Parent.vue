<template>
  <div>
    <h1>Parent</h1>
    <m-child
      msg="from Parent msg"
      @showMsg="showMsg"
      ref="child"
      v-bind="$attrs"
    ></m-child>
    {{msg}}
    <h5>
      vuex
      <span>{{count}}</span>
    </h5>
    <h5>
      getters
      <span>{{doubleCount}}</span>
    </h5>
    <button @click="add">增加</button>
  </div>
</template>

<script>
  import MChild from './Child'
  import { mapState, mapGetters } from 'vuex'
  export default {
    // computed: {
    //     count() {
    //       return this.$store.state.count
    //     }
    //   },
    computed: {
      ...mapState({
        count: state => state.count.count
      }),
      // doubleCount() {
      //   return this.$store.getters.doubleCount
      // },
      ...mapGetters(['doubleCount'])
    },
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
      },
      add() {
        // this.$store.commit('add') // 提交 mutations
        this.$store.dispatch('delayAdd') // 触发 actions
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