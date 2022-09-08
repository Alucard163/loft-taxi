import { logIn, getToken } from "../actions";
import { serverRegister, serverLogin } from "../api";
import { AUTHENTICATE, REGISTER } from "../actions";

export const regMiddleware = (store) => (next) => async (action) => {
    if (action.type === REGISTER) {
        const { email, password, name, surname } = action.payload;
        const data = await serverRegister(email, password, name, surname)
        if (data.success) {
            store.dispatch(logIn())
            store.dispatch(getToken(data.token))
        }
    } else {
        next(action)
    }
};

export const authMiddleware = (store) => (next) => async (action) => {
    if (action.type === AUTHENTICATE) {
        const { email, password } = action.payload;
        const data = await serverLogin(email, password)
        if (data.success) {
            store.dispatch(logIn())
            store.dispatch(getToken(data.token))
        }
    } else {
        next(action)
    }
};
