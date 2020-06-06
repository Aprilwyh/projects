import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import login from '@/components/container'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home' // 重定向
    },
    {
      path: '/home',
      name: 'main',
      component: main
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: login
    }
  ]
})
