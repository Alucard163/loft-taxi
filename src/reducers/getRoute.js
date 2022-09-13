import {GETROUTE} from "../actions"
import { createReducer } from '@reduxjs/toolkit'

const initialState = {
    route: []
}

const route = createReducer(initialState, (builder) => {
    builder
        .addCase(GETROUTE, (state, action) => {
            state.route = action.payload
        })
        .addDefaultCase((state, action) => {
            return state
        })
})

export default route;