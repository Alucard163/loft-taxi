import { recordSaga } from './recordSaga'
import { routeSaga } from './routeSaga'
import { serverGetRoute } from '../api'
import { askForRoute } from '../actions'

jest.mock('../api')

describe('route saga', () => {
  it('provide route', async () => {
    serverGetRoute.mockImplementation(async () => ({
      from: '/',
      to: '/map'
    }))

    const dispatched = await recordSaga(routeSaga, askForRoute())

    expect(dispatched).toStrictEqual([
      { type: 'SET_LOADING', payload: true },
      { type: 'GETROUTE', payload: { from: '/', to: '/map' } },
      { type: 'SET_LOADING', payload: false }
    ])
  })
})
