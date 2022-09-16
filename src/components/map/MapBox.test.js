// import MapBox from './MapBox'
// import { render } from '@testing-library/react'

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
  Map: () => ({})
}))

describe('mapBox test', () => {
  it.todo('should render correctly')
})
