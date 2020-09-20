import Vue from 'vue'
import Router from 'vue-router'

// 解决 ElementUI 导航栏中的 vue-router 在 3.0 以上版本重复点菜单报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

// 同步加载
// import main from '@/components/main'
// import login from '@/components/container'
// 异步加载
const main = () => import('@/components/main')
const login = () => import('@/components/container')

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
      path: '/user',
      name: 'user',
      component: () => import('@/views/user/user.vue'),
      children: [
        {
          path: 'settings',
          name: 'settings',
          // meta: { requireAuth: true },
          component: () => import('@/views/user/settings/settings.vue')
        }
      ]
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
