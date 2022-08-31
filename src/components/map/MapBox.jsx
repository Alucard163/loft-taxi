import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';

import { mapboxData } from "../../utils/constants/mapbox";

import styles from './MapBox.module.css';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN || '';

const MapBox = () => {
    const mapContainer = useRef(null);

    const [lng, setLng] = useState(mapboxData.lng);
    const [lat, setLat] = useState(mapboxData.lat);
    const [zoom, setZoom] = useState(mapboxData.zoom);

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: mapboxData.style,
            center: [lng, lat],
            zoom: zoom
        });

        map.on('move', () => {
            setLng(map.getCenter().lng.toFixed(4));
            setLat(map.getCenter().lat.toFixed(4));
            setZoom(map.getZoom().toFixed(2));
        });

        // Clean up on unmount
        return () => map.remove();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    return (
        <>
            <div data-testid="mapbox-container" ref={mapContainer} className={styles.map} />
        </>
    );
};

export default MapBox;