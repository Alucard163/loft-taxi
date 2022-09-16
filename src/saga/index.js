import { takeEvery } from 'redux-saga/effects'
import { AUTHENTICATE, REGISTER, UPDATECARD, ASKFORCARD, ASKFORADDRESS, ASKFOROUTE } from '../actions'
import { paymentUpdateSaga } from './paymentUpdateSaga'
import { addressListSaga } from './addressListSaga'
import { authorizationSaga } from './authorizationSaga'
import { paymentGetSaga } from './paymentGetSaga'
import { registrationSaga } from './registrationSaga'
import { routeSaga } from './routeSaga'

export function * rootSaga () {
  yield takeEvery(AUTHENTICATE, authorizationSaga)
  yield takeEvery(REGISTER, registrationSaga)
  yield takeEvery(UPDATECARD, paymentUpdateSaga)
  yield takeEvery(ASKFORCARD, paymentGetSaga)
  yield takeEvery(ASKFORADDRESS, addressListSaga)
  yield takeEvery(ASKFOROUTE, routeSaga)
}
