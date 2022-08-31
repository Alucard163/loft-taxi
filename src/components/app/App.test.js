import { render } from '@testing-library/react';
import App from "./App";

jest.mock('../../components/header', () => ({ __esModule: true, default: () => <div>Header content</div> }))
jest.mock('../../pages/login', () => ({ __esModule: true, default: () => <div>LoginPage content</div> }))
jest.mock('../../pages/profile', () => ({ __esModule: true, default: () => <div>Profile content</div> }))
jest.mock('../../pages/map', () => ({ __esModule: true, default: () => <div>Map content</div> }))
jest.mock('../../pages/registration', () => ({ __esModule: true, default: () => <div>Registration content</div> }))

describe('app', () => {
  it('renders correctly', () => {
    const { container } = render(<App />);
    expect(container.innerHTML).toMatch('LoginPage content')
    expect(container.innerHTML).not.toMatch('Header content')
    expect(container.innerHTML).not.toMatch('Profile content')
    expect(container.innerHTML).not.toMatch('Map content')
    expect(container.innerHTML).not.toMatch('Registration content')
  })
})
