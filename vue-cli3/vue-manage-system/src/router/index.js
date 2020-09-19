import Vue from 'vue'
import VueRouter from 'vue-router'

// 解决 ElementUI 导航栏中的 vue-router 在 3.0 以上版本重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login/Login.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
