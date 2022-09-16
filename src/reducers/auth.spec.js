import authReducer from './auth'
import { logIn, logOut, getToken } from '../actions'

describe('auth reducer', () => {
  // eslint-disable-next-line no-unused-vars
  let state

  it('log_in', () => {
    expect(authReducer(state = { isLoggedIn: false }, logIn())).toStrictEqual({ isLoggedIn: true })
  })

  it('log_out', () => {
    expect(authReducer(state = { isLoggedIn: true }, logOut())).toStrictEqual({ isLoggedIn: false })
  })

  it('get_token', () => {
    const action = getToken()
    expect(authReducer(state = { token: '' }, action)).toStrictEqual({ token: action.token })
  })
})
