import { render } from '@testing-library/react';
import Aside from './Aside';


describe('Aside tests', () => {
    it('renders correctly', () => {
        const { container } = render(<Aside />);
        const asideExpect = '<div class="aside"><img src="logo-aside.svg" alt="логотип такси"></div>';

        expect(container.innerHTML).toBe(asideExpect)
    })
})