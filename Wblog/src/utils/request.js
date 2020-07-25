import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import store from '@/store'


// 创建axios实例
const service = axios.create({
  baseURL: '/api',
  timeout: 5000 // 请求超时时间
})

// request拦截器，在请求头中加入token
service.interceptors.request.use(config => {
  if (store.state.user.myToken) {
    config.headers.myToken = store.state.user.myToken
  }
  return config
}, error => {
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(response => {
  const res = response.data
  if (res.status === 501) {
    MessageBox.alert('系统未登录，请您登录', '错误', {
      confirmButtonText: '确定',
      type: 'error'
    }).then(() => { // 登出
      store.dispatch('logout').then(() => {
        location.reload()
      })
    })
    return Promise.reject('error')
  } else if (res.status === 403) {
    MessageBox.alert('未授权，没有权限', '错误', {
      confirmButtonText: '确定',
      type: 'error'
    })
    return Promise.reject('error')
  } else {
    return response
  }
}, error => {
  Message({
    message: '登录连接超时（后台不能连接，请联系系统管理员）',
    type: 'error',
    duration: 5 * 1000
  })
  return Promise.reject(error)
})

export default service
