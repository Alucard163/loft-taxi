import Header from './Header'

import { render, screen } from '@testing-library/react'

describe('header component', () => {
  it('check render', () => {
    render(<Header/>)
    const imgExpect = '<img src="logo.svg" alt="логотип такси" class="logo">'

    expect(screen.getByTestId('header-component').innerHTML).toContain(imgExpect)
    expect(screen.getByText('Карта')).toBeInTheDocument()
    expect(screen.getByText('Профиль')).toBeInTheDocument()
    expect(screen.getByText('Выйти')).toBeInTheDocument()
  })
})
