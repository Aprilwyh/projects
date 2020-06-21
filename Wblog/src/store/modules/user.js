import { userLogin, logout } from '@/api/login'
import { getToken, setToken, removeToken, getUser, setUser } from '@/utils/auth'

const user = {
  state: {
    // 存储token
    myToken: getToken(),
    userName: getUser()
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.myToken = token
    },
    SET_NAME: (state, userName) => {
      state.userName = userName
    }
  },
  actions: {
    // 用户登录
    userLogin({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        userLogin(userInfo.email, userInfo.password).then(response => {
          const data = response.data.data
          commit('SET_TOKEN', data.token)
          setToken(data.token)
          commit('SET_NAME', data.user.username)
          setUser(data.user.username)
          resolve()
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
          resolve()
        }).catch(error => {
          reject(error)
        })

      })
    }
  }
}

export default user