import cardReducer from './getCard'
import { cardAdded } from '../actions'

describe('get card reducer', () => {
  // eslint-disable-next-line no-unused-vars
  let state

  it('card added', () => {
    expect(cardReducer(state = { isCardUpdated: false }, cardAdded())).toStrictEqual({ isCardUpdated: true })
  })
})
