import { call, put } from 'redux-saga/effects'
import { serverLogin } from '../api'
import { getToken, logIn } from '../actions'

export function * authorizationSaga (action) {
  const { email, password } = action.payload
  const { success, token } = yield call(serverLogin, email, password)
  if (success) {
    yield put(logIn())
    yield put(getToken(token))
  }
}
