import loadingReducer from './loading'
import { setLoading } from '../actions'

describe('loading reducer', () => {
  // eslint-disable-next-line no-unused-vars
  let state

  it('set_loading', () => {
    expect(loadingReducer(state = { isLoading: false }, setLoading(true))).toStrictEqual({ isLoading: true })
  })
})
