// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';

import './common/css/index.css'; // 批量引入css样式文件
Vue.config.productionTip = false;
Vue.prototype.$axios = axios; // 挂载到Vue原型中，使得所有组件都可以使用axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  components: { App },
  template: '<App/>'
});
