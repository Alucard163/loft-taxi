import {GETROUTE, CLEARROUTE} from "../actions"
import { createReducer } from '@reduxjs/toolkit'

const initialState = {
    route: []
}

const route = createReducer(initialState, (builder) => {
    builder
        .addCase(GETROUTE, (state, action) => {
            state.route = action.payload
        })
        .addCase(CLEARROUTE, (state, action) => {
            state.route = []
        })
        .addDefaultCase((state, action) => {
            return state
        })
})

export default route;