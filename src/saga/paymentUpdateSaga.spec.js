import { paymentUpdateSaga } from './paymentUpdateSaga'
import { serverUpdateCard } from '../api'
import { updateCard } from '../actions'
import { recordSaga } from './recordSaga'

jest.mock('../api')

describe('paymentUpdateSaga', () => {
  it('update payment', async () => {
    serverUpdateCard.mockImplementation(async () => ({
      cardNumber: '0000 0000 0000 0000',
      expiryDate: '05/24',
      cardName: 'IVAN IVANOV',
      cvc: '123',
      token: 'rec5jE3JjG9KSvRKX',
      success: true
    }))

    const dispatched = await recordSaga(paymentUpdateSaga, updateCard())

    expect(dispatched).toStrictEqual([
      { type: 'SET_LOADING', payload: true },
      { type: 'CARDADDED', payload: undefined },
      { type: 'SET_LOADING', payload: false }
    ])
  })
})
