const TokenKey = 'myToken'

export function getToken() {
  return localStorage.getItem(TokenKey)
}

export function setToken(token) {
  return localStorage.setItem(TokenKey, token)
}

export function removeToken() {
  return localStorage.removeItem(TokenKey)
}

export function getUser() {
  // return sessionStorage.getItem('username')
  return localStorage.getItem('username')
}
export function setUser(username) {
  // return sessionStorage.setItem("username", username);
  return localStorage.setItem("username", username);
}
