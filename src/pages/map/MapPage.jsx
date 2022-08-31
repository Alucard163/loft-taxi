import React from "react";
import PropTypes from "prop-types";

import MapBox from "../../components/map";

import styles from './MapPage.module.css'

class MapPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div data-testid="map-page" className={styles['map']}>
                <MapBox />
            </div>
        )
    }
}

MapPage.propTypes = {
    page: PropTypes.string,
    setPage: PropTypes.func,
}

export default MapPage;