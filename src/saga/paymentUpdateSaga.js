import { call, put } from 'redux-saga/effects';
import {serverUpdateCard} from "../api";
import {cardAdded, setLoading} from "../actions";

export function* paymentUpdateSaga(action) {
    console.log('paymentUpdateSaga', action)
    yield put(setLoading(true));
    const { cardName, cardNumber, cardDate, cardCvc } = action.payload;
    const {success} = yield call(serverUpdateCard, cardName, cardNumber, cardDate, cardCvc)
    if (success) {
        yield put(cardAdded());
    }
    yield put(setLoading(false));
}