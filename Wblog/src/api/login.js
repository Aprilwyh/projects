import request from '@/utils/request'

export function userLogin(email, password) {
  const data = {
    email,
    password
  }
  return request({
    url: '/login',
    method: 'post',
    data
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}

export function getUserInfo(key) {
  debugger;

  return request({
    url: '/file/download', // TODO 后台地址
    method: 'post',
    key
    // params: { token }
  })
}