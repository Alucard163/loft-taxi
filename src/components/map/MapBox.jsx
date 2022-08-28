import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';

import styles from './MapBox.module.css';

mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

const MapBox = () => {
    const mapContainer = useRef(null);

    const [lng, setLng] = useState(30.3350986);
    const [lat, setLat] = useState(59.9342802);
    const [zoom, setZoom] = useState(14);

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
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