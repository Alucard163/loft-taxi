import RegisterForm from './index'

import { render, screen } from '@testing-library/react'

describe('register form component', () => {
  it('check render', () => {
    render(<RegisterForm />)

    expect(screen.getByRole('form')).toHaveFormValues({
      email: '',
      name: '',
      password: ''
    })
  })

  it('check inputs', async () => {
    render(<RegisterForm />)

    expect(screen.getByLabelText(/Email\*/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Как вас зовут\?\*/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Придумайте пароль\*/i)).toBeInTheDocument()
  })
})
