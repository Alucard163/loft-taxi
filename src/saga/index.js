import { call, put, takeEvery } from 'redux-saga/effects';
import { AUTHENTICATE, REGISTER, UPDATECARD, ASKFORCARD, ASKFORADDRESS, ASKFOROUTE } from '../actions';
import { logIn, cardAdded, getAddresses, getRoute, getToken } from '../actions';
import { serverLogin, serverRegister, serverUpdateCard, serverAddressList, serverGetRoute, serverGetCard } from '../api';

function* authorizationSaga(action) {
    const { email, password } = action.payload;
    const { success, token } = yield call(serverLogin, email, password)
    if (success) {
        yield put(logIn())
        yield put(getToken(token))
    }
}

function* registrationSaga(action) {
    console.log('registrationSaga', action)
    const { email, password, name, surname } = action.payload;
    const { success, token } = yield call(serverRegister, email, password, name, surname)
    if (success) {
        yield put(logIn())
        yield put(getToken(token))
    }
}

function* paymentUpdateSaga(action) {
    console.log('paymentUpdateSaga', action)
    const { cardName, cardNumber, cardDate, cardCvc } = action.payload;
    const {success} = yield call(serverUpdateCard, cardName, cardNumber, cardDate, cardCvc)
    if (success) {
        yield put(cardAdded());
    }
}

function* paymentGetSaga() {
    console.log('paymentGetSaga')
    const { id, cardNumber, expiryDate, cardName, cvc } = yield call(serverGetCard);
    console.log(id, cardNumber, expiryDate, cardName, cvc );
    if (id && cardNumber && expiryDate && cardName && cvc) {
        yield put(cardAdded());
    }
}

function* addressListSaga() {
    console.log('addressListSaga')
    const addresses = yield call(serverAddressList);
    yield put(getAddresses(addresses));
}

function* routeSaga(action) {
    console.log('routeSaga')
    const { from, to } = action.payload;
    const route = yield call(serverGetRoute, from, to);
    yield put(getRoute(route));
}


export function* rootSaga() {
    yield takeEvery(AUTHENTICATE, authorizationSaga);
    yield takeEvery(REGISTER, registrationSaga)
    yield takeEvery(UPDATECARD, paymentUpdateSaga)
    yield takeEvery(ASKFORCARD, paymentGetSaga)
    yield takeEvery(ASKFORADDRESS, addressListSaga)
    yield takeEvery(ASKFOROUTE, routeSaga )
}