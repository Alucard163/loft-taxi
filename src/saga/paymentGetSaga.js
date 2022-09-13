import { call, put } from 'redux-saga/effects';
import {serverGetCard} from "../api";
import {cardAdded, setLoading} from "../actions";

export function* paymentGetSaga() {
    console.log('paymentGetSaga')
    yield put(setLoading(true));
    const { id, cardNumber, expiryDate, cardName, cvc } = yield call(serverGetCard);
    console.log(id, cardNumber, expiryDate, cardName, cvc );
    if (id && cardNumber && expiryDate && cardName && cvc) {
        yield put(cardAdded());
    }
    yield put(setLoading(false));
}