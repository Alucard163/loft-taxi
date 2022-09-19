import routeReducer from './getRoute'
import { getRoute, clearRoute } from '../actions'

describe('get Route', () => {
  // eslint-disable-next-line no-unused-vars
  let state

  it.skip('get Route', function () {
    expect(routeReducer(state = { route: [] }, getRoute())).toStrictEqual({ route: undefined })
  })

  it('clear Route', function () {
    expect(routeReducer(state = { route: [] }, clearRoute())).toStrictEqual({ route: [] })
  })
})
