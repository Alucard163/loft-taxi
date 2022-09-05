import { LOG_IN, LOG_OUT, GET_TOKEN } from "../actions"
import { createReducer } from '@reduxjs/toolkit'

const initialState = {
    isLoggedIn: false,
    token: '',
}

const auth = createReducer(initialState, (builder) => {
    builder
        .addCase(LOG_IN, (state, action) => {
            state.isLoggedIn = true
        })
        .addCase(LOG_OUT, (state, action) => {
            state.isLoggedIn = false
        })
        .addCase(GET_TOKEN, (state, action) => {
            return {...state, token: action.token}
        })
        .addDefaultCase((state, action) => {
            return state
        })
})

export default auth;