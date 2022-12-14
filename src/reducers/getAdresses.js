import { GETADDRESSES } from '../actions'
import { createReducer } from '@reduxjs/toolkit'

const initialState = {
  addresses: []
}

const address = createReducer(initialState, (builder) => {
  builder
    .addCase(GETADDRESSES, (state, action) => {
      state.addresses = action.payload
    })
    .addDefaultCase((state) => {
      return state
    })
})

export default address
