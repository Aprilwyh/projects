export default {
  state: {
    count: 0
  },
  getters: {
    doubleCount(state) {
      return state.count * 2
    }
  },
  mutations: {
    add(state) {
      state.count++
    },
    decrease(state) {
      state.count--
    }
  },
  actions: {
    delayAdd(context) {
      setTimeout(() => {
        context.commit('add') // 提交 mutations
      }, 1000)
    }
  }
}