import LoginForm from "./index";

import { render, screen } from "@testing-library/react";

describe('LoginForm component', () => {
    it('check render', () => {
        render(<LoginForm />)

        expect(screen.getByRole('form')).toHaveFormValues({
            email: '',
            password: '',
        })
    })

    it('check inputs', async () => {
        render(<LoginForm />)

        expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Пароль/i)).toBeInTheDocument();
    })
})