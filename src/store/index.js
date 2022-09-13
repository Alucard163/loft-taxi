import rootReducer from '../reducers';
import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from '../saga';

const saga = createSagaMiddleware();
export const store = configureStore({
        reducer: rootReducer,
        middleware: [...getDefaultMiddleware({ thunk: false }), saga],
        devTools: true,
})

saga.run(rootSaga)