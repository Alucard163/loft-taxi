import {CARDADDED} from "../actions";
import { createReducer } from '@reduxjs/toolkit'

const initialState = {
  isCardUpdated : false
}

const card = createReducer(initialState, (builder) => {
  builder
      .addCase(CARDADDED, (state, action) => {
          state.isCardUpdated = true
      })
      .addDefaultCase((state, action) => {})
})

export default card;