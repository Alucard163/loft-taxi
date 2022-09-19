import { authorizationSaga } from './authorizationSaga'
import { recordSaga } from './recordSaga'
import { authenticate } from '../actions'
import { serverLogin } from '../api'

jest.mock('../api')

describe('authorization saga', () => {
  it('authenticates through api', async () => {
    serverLogin.mockImplementation(async () => ({
      success: true,
      token: 'rec5jE3JjG9KSvRKX'
    }))

    const dispatched = await recordSaga(
      authorizationSaga,
      authenticate('email@example.com', 'password')
    )

    expect(dispatched).toStrictEqual([
      { type: 'LOG_IN', payload: undefined },
      { type: 'GET_TOKEN', payload: 'rec5jE3JjG9KSvRKX' }
    ])
  })
})
