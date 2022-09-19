import { LOG_IN, LOG_OUT, GET_TOKEN } from '../actions'
import { createReducer } from '@reduxjs/toolkit'

const initialState = {
  isLoggedIn: false,
  token: ''
}

const auth = createReducer(initialState, (builder) => {
  builder
    .addCase(LOG_IN, (state) => {
      state.isLoggedIn = true
    })
    .addCase(LOG_OUT, (state) => {
      state.isLoggedIn = false
      state.token = ''
    })
    .addCase(GET_TOKEN, (state, action) => {
      state.token = action.payload
    })
    .addDefaultCase((state) => {
      return state
    })
})

export default auth
