import { createAction } from '@reduxjs/toolkit'
import {
    LOG_IN,
    LOG_OUT,
    REGISTER,
    AUTHENTICATE,
    GET_TOKEN,
    UPDATECARD,
    ASKFORCARD,
    CARDADDED,
    ASKFORADDRESS,
    GETROUTE,
    GETADDRESSES,
    ASKFOROUTE
} from "./types";

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
    return {
        payload: token
    }
})

export const updateCard = createAction(UPDATECARD, (cardName, cardNumber, cardDate, cardCvc) => {
    return {
        payload: { cardName, cardNumber, cardDate, cardCvc }
    }
})

export const cardAdded = createAction(CARDADDED)

export const askForCard = createAction(ASKFORCARD)

export const askForAddress = createAction(ASKFORADDRESS)

export const getAddresses = createAction(GETADDRESSES, (addresses) => {
    return {
        payload: addresses
    }
})

export const askForRoute = createAction(ASKFOROUTE, (from, to) => {
    return {
        payload: { from, to }
    }
})

export const getRoute = createAction(GETROUTE, (route) => {
    return {
        payload: route
    }
})