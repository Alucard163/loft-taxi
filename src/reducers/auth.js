import { LOG_IN, LOG_OUT, GET_TOKEN } from "../actions"

const initialState = {
    isLoggedIn: false,
    token: '',
}

export default function auth (state = initialState, action) {
    switch (action.type) {
        case LOG_IN: {
            return {isLoggedIn: true}
        }
        case LOG_OUT: {
            return {isLoggedIn: false}
        }
        case GET_TOKEN: {
            return {
                ...state,
                token: action.token
            }
        }
        default: return state
    }
}