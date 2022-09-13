import { call, put } from 'redux-saga/effects';
import {getAddresses, setLoading} from '../actions';
import { serverAddressList } from '../api';

export function* addressListSaga() {
    console.log('addressListSaga')
    yield put(setLoading(true));
    const addresses = yield call(serverAddressList);
    yield put(getAddresses(addresses));
    yield put(setLoading(false));
}