import React from "react";
import PropTypes from "prop-types";

import MapBox from "../../components/map";

import styles from './MapPage.module.css'

class MapPage extends React.Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        page: PropTypes.string,
        setPage: PropTypes.func,
    }

    render() {
        return (
            <div data-testid="map-page" className={styles['map']}>
                <MapBox />
            </div>
        )
    }
}

export default MapPage;