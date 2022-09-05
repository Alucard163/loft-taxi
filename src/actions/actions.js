import { LOG_IN, LOG_OUT, REGISTER, AUTHENTICATE, GET_TOKEN } from "./types";

export const logIn = () => ({ type: LOG_IN })

export const logOut = () => ({ type: LOG_OUT })

export const register = (email, password, name, surname) => ({
    type: REGISTER, payload: { email, password, name, surname }
})

export const authenticate = (email, password) => ({
    type: AUTHENTICATE, payload: { email, password }
})

export const getToken = (token) => ({ type: GET_TOKEN, token })