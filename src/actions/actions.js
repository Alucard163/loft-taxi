import { createAction } from '@reduxjs/toolkit'
import { LOG_IN, LOG_OUT, REGISTER, AUTHENTICATE, GET_TOKEN } from "./types";

export const logIn = createAction(LOG_IN)

export const logOut = createAction(LOG_OUT)

export const register = createAction(REGISTER, function prepare(email, password, name, surname) {
    return {
        payload: { email, password, name, surname }
    }
})

export const authenticate = createAction(AUTHENTICATE, function prepare(email, password) {
    return {
        payload: { email, password}
    }
})

export const getToken = createAction(GET_TOKEN, function prepare(token) {
    return token
})