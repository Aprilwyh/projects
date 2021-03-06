// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'

import './permission' // permission control

Vue.config.productionTip = false
import '../src/css/base.css'; // 全局应用样式
import 'font-awesome/css/font-awesome.min.css'

Vue.use(ElementUI)
Vue.prototype.$axios = axios
axios.defaults.baseURL = '/api'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  store,
  components: { App },
  template: '<App/>'
})