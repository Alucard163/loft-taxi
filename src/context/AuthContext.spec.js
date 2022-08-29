import {render, screen} from '@testing-library/react'
import { AuthContext } from "./AuthContext";

const customRender = (ui, {providerProps, ...renderOptions}) => {
    const isLoggedIn = true
    return render(
        <AuthContext.Provider value={isLoggedIn} {...providerProps}>{ui}</AuthContext.Provider>,
        renderOptions,
    )
}

describe('AuthContext', () => {
    it('check auth context', () => {
        const providerProps = {
            someKey: 'someValue',
        }
        customRender(
            <AuthContext.Consumer>
                {(value) => <span>Received: {String(value)}</span>}
            </AuthContext.Consumer>,
            {providerProps},
        )
        expect(screen.getByText(/^Received:/).textContent).toBe('Received: true')
    })
})