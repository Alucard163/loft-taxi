import { paymentGetSaga } from './paymentGetSaga'
import { recordSaga } from './recordSaga'
import { serverGetCard } from '../api'
import { askForCard } from '../actions'

jest.mock('../api')

describe('paymentGetSaga', () => {
  it('get card from server', async () => {
    serverGetCard.mockImplementation(async () => ({
      success: true,
      token: 'rec5jE3JjG9KSvRKX',
      cardNumber: '0000 0000 0000 0000',
      id: '12345',
      expiryDate: '05/25',
      cardName: 'IVAN IVANOV',
      cvc: '123'
    }))

    const dispatched = await recordSaga(paymentGetSaga, askForCard())

    expect(dispatched).toStrictEqual([
      { type: 'SET_LOADING', payload: true },
      { type: 'CARDADDED', payload: undefined },
      { type: 'SET_LOADING', payload: false }
    ])
  })
})
