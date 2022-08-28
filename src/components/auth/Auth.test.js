import Auth from './Auth';
import { render, screen } from "@testing-library/react";


describe('Auth tests', () => {
    it('renders correctly', () => {
        render(<Auth />);

        expect(screen.getByTestId('auth-component')).toBeInTheDocument();
    })

    it('test login props', async () => {
        render(<Auth page="login"/>);
        const loginTextExpect = '<p>Новый пользователь? <span class="link">Зарегистрируйтесь</span></p>';

        expect(screen.getByText('Зарегистрируйтесь')).toBeInTheDocument();
        expect(screen.getByTestId('login-form')).toBeInTheDocument();
        expect(screen.getByTestId('auth-text').innerHTML).toMatch(loginTextExpect);
    })

    it('test register props', async () => {
        render(<Auth page="register"/>);
        const registerTextExpect = '<p>Уже зарегистрированы? <span class="link">Войти</span></p>';

        expect(screen.getAllByText('Войти').at(0)).toBeInTheDocument();
        expect(screen.getByTestId('register-form')).toBeInTheDocument();
        expect(screen.getByTestId('auth-text').innerHTML).toMatch(registerTextExpect);
    })
})