import { addressListSaga } from './addressListSaga'
import { recordSaga } from './recordSaga'
import { getAddresses } from '../actions'
import { serverAddressList } from '../api'

jest.mock('../api')

describe('addressListSaga', () => {
  it('get address list from server', async () => {
    serverAddressList.mockImplementation(async () => ({
      addresses: ['Пулково (LED)', 'Эрмитаж']
    }))

    const dispatched = await recordSaga(addressListSaga, getAddresses())

    expect(dispatched).toStrictEqual([
      {
        type: 'SET_LOADING',
        payload: true
      },
      {
        type: 'GETADDRESSES',
        payload: { addresses: ['Пулково (LED)', 'Эрмитаж'] }
      },
      {
        type: 'SET_LOADING',
        payload: false
      }
    ])
  })
})
