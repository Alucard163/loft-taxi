import { SET_LOADING } from "../actions";
import { createReducer } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
};

const loading = createReducer(initialState, (builder) => {
    builder
        .addCase(SET_LOADING, (state, action) => {
            state.isLoading = action.payload
        })
        .addDefaultCase((state, action) => {
            return state
        })
})

export default loading;