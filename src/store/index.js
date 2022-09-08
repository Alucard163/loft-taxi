import rootReducer from '../reducers';
import { configureStore } from "@reduxjs/toolkit";
import { regMiddleware, authMiddleware } from '../middlewares/authMiddleware';

export const store = configureStore({
        reducer: rootReducer,
        middleware: [regMiddleware, authMiddleware],
        devTools: true,
})

store.subscribe(() => {
    localStorage['token'] = JSON.stringify(store.getState());
});