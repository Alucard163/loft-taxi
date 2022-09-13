import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { connect, useDispatch } from "react-redux";
import { Autocomplete, TextField, Typography, Button } from "@mui/material";
import { Link } from 'react-router-dom';

import { askForAddress, askForRoute, askForCard } from '../../actions'
import { drawRoute } from "../../utils/drawRoute";
import { mapboxData } from "../../utils/constants/mapbox";

import styles from './MapBox.module.css';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN || '';

const MapBox = (props, {useDispatchHook=useDispatch}) => {
    let map = useRef(null);
    const { isCardUpdated, route } = props;
    const mapContainer = useRef(null);
    const dispatch = useDispatchHook();
    const [lng, setLng] = useState(mapboxData.lng);
    const [lat, setLat] = useState(mapboxData.lat);
    const [zoom, setZoom] = useState(mapboxData.zoom);

    const handleSubmit = async event => {
        event.preventDefault();
        const { from, to } = event.target;
        await dispatch(askForRoute(from.value, to.value));
    }

    useEffect(() => {
        map = new mapboxgl.Map({
            container: mapContainer.current,
            style: mapboxData.style,
            center: [lng, lat],
            zoom: zoom
        });
        dispatch(askForCard());
        dispatch(askForAddress());

        map.on('move', () => {
            setLng(map.getCenter().lng.toFixed(4));
            setLat(map.getCenter().lat.toFixed(4));
            setZoom(map.getZoom().toFixed(2));
        });

        // Clean up on unmount
        return () => map.remove();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        if (route.length !== 0) {
            console.log('we are here');
            drawRoute(this.map, route);
        }
    });

    return (
        <>
            <div data-testid="mapbox-container" ref={mapContainer} className={styles.map} />
            {isCardUpdated ?
                <>
                    <form onSubmit={handleSubmit}>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={props.addresses}
                            sx={{ width: 300, position: 'absolute', top: '2%', left: '2%', background: '#fff' }}
                            renderInput={(params) => <TextField {...params} label="Откуда" name='from' />}
                        />
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={props.addresses}
                            sx={{ width: 300, position: 'absolute', top: '10%', left: '2%', background: '#fff' }}
                            renderInput={(params) => <TextField {...params} label="Куда" name='to' />}
                        />
                        <Button sx={{ position: 'absolute', top: '18%', left: '2%', background: '#fff' }} type='submit'
                        >Вызвать такси</Button>
                    </form>
                </>
                :
                <>
                    <div style={{ position: "absolute", top: '2%', left: '2%' }}>
                        <Typography fontSize='18px' align='center' sx={{ marginBottom: '25px' }}>Введите платежные данные</Typography>
                        <Link to='/profile' className="Login__submit">Перейти в профиль</Link>
                    </div>
                </>
            }
        </>
    );
};

export default connect(
    (state) => ({
        isCardUpdated: state.card.isCardUpdated,
        addresses: state.address.addresses,
        route: state.route.route
    }),
    { askForAddress, askForRoute, askForCard })
(MapBox);