import React from "react";

import styles from './MapPage.module.css'

class MapPage extends React.Component {

    render() {
        return (
            <div data-testid="profile-page" className={styles['map']}>
                <h1>Map page</h1>
            </div>
        )
    }
}

export default MapPage;