import router from './router'
import store from './store'
import { getToken } from '@/utils/auth' // 拿到token

router.beforeEach((to, from, next) => {
  if (getToken()) { // 获取是否有token
    if (to.name === 'login') {
      next({ path: '/' }) // 如果有token去往登录页，就返回到首页
    } else {
      if (store.getters.info.length === 0) { // 判断当前用户是否已拉取完user_info信息
        store.dispatch('GetUserInfo').then(res => {
          next()
        })
      } else { // 如果已经有信息就放行
        next()
      }
    }
  } else {
    if (to.name === 'login' || to.name === 'main' || to.name === 'register') {
      next() // 未登录状态下放行登录、注册及首页
    } else {
      next('/login')
    }
  }
})