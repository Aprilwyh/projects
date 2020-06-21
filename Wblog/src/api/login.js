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