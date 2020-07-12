import request from '@/utils/request'

/* export function createStorage(data) {
  return request({
    url: '/auth/uploadAvator',
    method: 'post',
    data
  })
}

export function updateStorage(data) {
  return request({
    url: '/storage/update',
    method: 'post',
    data
  })
} */

const uploadPath = '/api' + '/auth/uploadAvatar'
export { uploadPath }
