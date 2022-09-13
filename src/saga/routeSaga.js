import { call, put } from 'redux-saga/effects';
import {serverGetRoute} from "../api";
import {getRoute, setLoading} from "../actions";

export function* routeSaga(action) {
    console.log('routeSaga')
    yield put(setLoading(true));
    const { from, to } = action.payload;
    const route = yield call(serverGetRoute, from, to);
    yield put(getRoute(route));
    yield put(setLoading(false));
}