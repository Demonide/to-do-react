import { LOGIN, LOGOUT } from "../types"

const loginActionCreator = (payload) => {
  return { type: LOGIN, payload: payload }
}

const logoutActionCreator = () => {
  return { type: LOGOUT }
}

export { loginActionCreator, logoutActionCreator };