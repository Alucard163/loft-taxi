import { call, put } from 'redux-saga/effects'
import { serverGetCard } from '../api'
import { cardAdded, setLoading } from '../actions'

export function * paymentGetSaga () {
  yield put(setLoading(true))
  const { id, cardNumber, expiryDate, cardName, cvc } = yield call(serverGetCard)
  if (id && cardNumber && expiryDate && cardName && cvc) {
    yield put(cardAdded())
  }
  yield put(setLoading(false))
}
