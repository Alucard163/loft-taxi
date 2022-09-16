import LoginPage from './LoginPage'

import { render, screen } from '@testing-library/react'

describe('auth tests', () => {
  it('renders correctly', () => {
    render(<LoginPage />)

    expect(screen.getByTestId('login-page')).toBeInTheDocument()
    expect(screen.getByTestId('aside-component')).toBeInTheDocument()
    expect(screen.getByTestId('auth-component')).toBeInTheDocument()
  })
})
