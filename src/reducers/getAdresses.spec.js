import adressesReducer from './getAdresses'
import { getAddresses } from '../actions'

describe('adresses reducer', () => {
  // eslint-disable-next-line no-unused-vars
  let state
  const data = ['Пулково (LED)', 'Эрмитаж', 'Кинотеатр Аврора', 'Мариинский театр']

  it('getaddresses', () => {
    expect(adressesReducer(state = { data }, getAddresses(data))).toStrictEqual({ data, addresses: data })
  })
})
