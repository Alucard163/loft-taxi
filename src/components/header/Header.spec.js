import Header from "./Header";

import { render, screen } from "@testing-library/react";

describe('Header component', () => {
    it.skip('check login page', () => {
        render(<Header page="login"/>);
        const imgExpect = '<img src="logo.svg" alt="логотип такси" class="logo">'

        expect(screen.getByTestId('header-component').innerHTML).toContain(imgExpect)
        console.log(screen.getByTestId('header-component').innerHTML);
    })

    it.skip('check register page', () => {
        render(<Header page="register"/>)

        console.log(screen.getByTestId('header-component').innerHTML);
    })

    it.skip('check map page', () => {
        render(<Header page="map"/>)

        console.log(screen.getByTestId('header-component').innerHTML);
    })

    it.skip('check profile page', () => {
        render(<Header page="profile"/>)

        console.log(screen.getByTestId('header-component').innerHTML);
    })
})