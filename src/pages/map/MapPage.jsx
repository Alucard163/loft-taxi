// eslint-disable-next-line no-unused-vars
import React from 'react'

import MapBox from '../../components/map'

import styles from './MapPage.module.css'

function MapPage () {
  return (
        <div data-testid="map-page" className={styles.map}>
            <MapBox />
        </div>
  )
}

export default MapPage
