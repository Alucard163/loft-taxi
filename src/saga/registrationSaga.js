import { call, put } from 'redux-saga/effects'
import { serverRegister } from '../api'
import { getToken, logIn, setLoading } from '../actions'

export function * registrationSaga (action) {
  yield put(setLoading(true))
  const { email, password, name, surname } = action.payload
  const { success, token } = yield call(serverRegister, email, password, name, surname)
  if (success) {
    yield put(logIn())
    yield put(getToken(token))
  }
  yield put(setLoading(false))
}
