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
  console.log(store)
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
  if (res.errno === 501) {
    MessageBox.alert('系统未登录，请您登录', '错误', {
      confirmButtonText: '确定',
      type: 'error'
    }).then(() => { // 登出
      store.dispatch('logout').then(() => {
        location.reload()
      })
    })
    return Promise.reject('error')
  } else if (res.errno === 502) {
    MessageBox.alert('系统内部错误，请联系管理员维护', '错误', {
      confirmButtonText: '确定',
      type: 'error'
    })
    return Promise.reject('error')
  } else {
    return response
  }
}, error => {
  Message({
    message: '未知错误',
    type: 'error',
    duration: 5 * 1000
  })
  return Promise.reject(error)
})

export default service
