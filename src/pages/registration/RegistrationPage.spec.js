import RegistrationPage from './RegistrationPage'
import { render, screen } from '@testing-library/react'

describe('auth tests', () => {
  it('renders correctly', () => {
    render(<RegistrationPage />)

    expect(screen.getByTestId('registration-page')).toBeInTheDocument()
    expect(screen.getByTestId('aside-component')).toBeInTheDocument()
    expect(screen.getByTestId('auth-component')).toBeInTheDocument()
  })
})
