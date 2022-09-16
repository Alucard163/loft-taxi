import { CARDADDED } from '../actions'
import { createReducer } from '@reduxjs/toolkit'

const initialState = {
  isCardUpdated: false
}

const card = createReducer(initialState, (builder) => {
  builder
    .addCase(CARDADDED, (state) => {
      state.isCardUpdated = true
    })
    .addDefaultCase((state) => {
      return state
    })
})

export default card
