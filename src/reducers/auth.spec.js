import authReducer from "./auth";
import { logIn, logOut, getToken } from '../actions';

describe('auth reducer', () => {
    let state;

    it('LOG_IN', () => {
        expect(authReducer(state = { isLoggedIn: false }, logIn())).toEqual({ isLoggedIn: true })
    })

    it('LOG_OUT', () => {
        expect(authReducer(state = { isLoggedIn: true }, logOut())).toEqual({ isLoggedIn: false })
    })

    it('GET_TOKEN', () => {
        const action = getToken();
        expect(authReducer(state = { token: '' }, action)).toEqual({ token: action.token })
    })
})