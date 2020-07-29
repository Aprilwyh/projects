import Vue from 'vue'

import App from './App.vue'
// 创建Vue根实例
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>' // 相当于在 components 中定义的组件名
})
// 挂载App组件