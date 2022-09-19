import { registrationSaga } from './registrationSaga'
import { recordSaga } from './recordSaga'
import { serverRegister } from '../api'
import { register } from '../actions'

jest.mock('../api')

describe('registrationSaga', () => {
  it('register through server', async () => {
    serverRegister.mockImplementation(async () => ({
      email: 'email@example.com',
      password: 'password',
      name: 'IVAN',
      surname: 'IVANOV',
      token: 'rec5jE3JjG9KSvRKX',
      success: true
    }))

    const dispatched = await recordSaga(registrationSaga, register())
    expect(dispatched).toStrictEqual([
      { type: 'SET_LOADING', payload: true },
      { type: 'LOG_IN', payload: undefined },
      { type: 'GET_TOKEN', payload: 'rec5jE3JjG9KSvRKX' },
      { type: 'SET_LOADING', payload: false }
    ])
  })
})
