const getters = {
  token: state => state.user.myToken,
  username: state => state.user.userName,
  avatar: state => state.user.avatar
}
export default getters