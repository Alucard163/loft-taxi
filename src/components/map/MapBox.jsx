// eslint-disable-next-line no-unused-vars
import React, { useRef, useEffect, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import { connect, useDispatch } from 'react-redux'

import Order from '../order'
import { askForAddress, askForRoute, askForCard, clearRoute } from '../../actions'

import { drawRoute } from '../../utils/drawRoute'
import { mapboxData } from '../../utils/constants/mapbox'

import styles from './MapBox.module.css'

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN || ''

const MapBox = (props) => {
  const map = useRef(null)
  // eslint-disable-next-line react/prop-types
  const { route } = props
  const mapContainer = useRef(null)
  const dispatch = useDispatch()
  const [lng, setLng] = useState(mapboxData.lng)
  const [lat, setLat] = useState(mapboxData.lat)
  const [zoom, setZoom] = useState(mapboxData.zoom)

  useEffect(() => {
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: mapboxData.style,
      center: [lng, lat],
      zoom
    })
    dispatch(askForCard())
    dispatch(askForAddress())

    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4))
      setLat(map.current.getCenter().lat.toFixed(4))
      setZoom(map.current.getZoom().toFixed(2))
    })

    // Clean up on unmount
    return () => {
      map.current.remove()
      dispatch(clearRoute(route))
    }
  }, [])

  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    if (route.length !== 0) {
      drawRoute(map, route)
    }
  }, [route])

  return (
        <>
            <div data-testid="mapbox-container" ref={mapContainer} className={styles.map} />
            <Order />
        </>
  )
}

export default connect(
  (state) => ({
    isCardUpdated: state.card.isCardUpdated,
    addresses: state.address.addresses,
    route: state.route.route
  }),
  { askForAddress, askForRoute, askForCard, clearRoute })(MapBox)
