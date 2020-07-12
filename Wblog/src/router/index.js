import Vue from 'vue'
import Router from 'vue-router'
// 同步加载
// import main from '@/components/main'
// import login from '@/components/container'
// 异步加载
const main = () => import('@/components/main')
const login = () => import('@/components/container')
const settings = () => import('@/views/user/settings/settings')

Vue.use(Router)

export default new Router({
  mode: 'history',
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
      path: '/user/settings',
      name: 'settings',
      meta: { requireAuth: true },
      component: settings
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      beforeEach: (to, from, next) => {
        // 获取是否有token
        let token = localStorage.getItem('myToken')
        if (to.path === '/login' || token) {
          next()
        } else {
          next('/login')
        }
      }
    },
    {
      path: '/register',
      name: 'register',
      component: login
    }
  ]
})
