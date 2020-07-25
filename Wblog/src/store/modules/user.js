import { userLogin, logout, getUserInfo } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'

const user = {
  state: {
    // 存储token
    myToken: getToken(),
    userInfo: [],
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.myToken = token
    },
    SET_INFO: (state, info) => {
      state.userInfo = info
    },
    REMOVE_INFO: (state) => {
      state.userInfo = []
    }
  },
  actions: {
    // 用户登录
    userLogin({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        userLogin(userInfo.email, userInfo.password).then(response => {
          const data = response.data.data
          if (response.data.status === 0) {
            commit('SET_TOKEN', data.token)
            setToken(data.token)
          }
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 登出
    logout({ commit }) {
      return new Promise((resolve, reject) => {
        logout().then(() => {
          commit('SET_TOKEN', '')
          removeToken()
          commit('REMOVE_INFO')
          resolve()
        }).catch(error => {
          reject(error)
        })

      })
    },
    // 获取用户信息
    GetUserInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getUserInfo().then(res => {
          const data = res.data.data
          if (data) {
            commit('SET_INFO', data)
          } else {
            reject()
          }
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default user