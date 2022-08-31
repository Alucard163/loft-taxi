import ProfilePage from "./ProfilePage";
import { render, screen } from "@testing-library/react";


describe('Auth tests', () => {
    it('renders correctly', () => {
        render(<ProfilePage />);

        expect(screen.getByTestId('profile-page')).toBeInTheDocument();
    })
})