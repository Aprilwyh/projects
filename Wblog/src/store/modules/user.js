import { userLogin, logout, getUserInfo } from '@/api/login'
import { getToken, setToken, removeToken, getUser, setUser, setAvatar, getAvatar } from '@/utils/auth'

const user = {
  state: {
    // 存储token
    myToken: getToken(),
    userName: getUser(),
    avatar: getAvatar()
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.myToken = token
    },
    SET_NAME: (state, userName) => {
      state.userName = userName
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
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
    },
    // 获取用户信息
    getUserInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getUserInfo(state.avatar).then(response => {
          debugger;
          const data = response.data.key
          commit('SET_AVATAR', data)
          setAvatar(data.avatar)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default user