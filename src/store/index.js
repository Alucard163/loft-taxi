import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import { configureStore } from "@reduxjs/toolkit";
import { regMiddleware, authMiddleware } from '../middlewares/authMiddleware';

export const store = createStore( rootReducer, compose(
    applyMiddleware(regMiddleware, authMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : noop => noop,
    ))

store.subscribe(() => {
    localStorage['token'] = JSON.stringify(store.getState());
    console.log(store.getState())
    console.log(localStorage);
});