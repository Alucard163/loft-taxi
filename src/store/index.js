import rootReducer from '../reducers'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from '../saga'

const saga = createSagaMiddleware()
export const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware({ thunk: false }), saga],
  devTools: true
})

// eslint-disable-next-line jest/require-hook
saga.run(rootSaga)
