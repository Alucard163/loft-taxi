import MapPage from './MapPage'

import { render, screen } from '@testing-library/react'

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
  Map: () => ({})
}))

describe('auth tests', () => {
  it.skip('renders correctly', () => {
    render(<MapPage />)

    expect(screen.getByTestId('map-page')).toBeInTheDocument()
    expect(screen.getByTestId('mapbox-container')).toBeInTheDocument()
  })
})
