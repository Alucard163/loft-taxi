import MapBox from "./MapBox";
import { render, screen } from "@testing-library/react";

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
    Map: () => ({})
}));

describe('MapBox test', () => {
    it.skip('should render correctly', () => {
        const { container } = render(<MapBox />);
    });
})