import React from "react";

import styles from './ProfilePage.module.css';

class ProfilePage extends React.Component {
    render() {
        return (
            <div className={styles.profile}>
                <h1>Profile Page</h1>
            </div>
        )
    }
}

export default ProfilePage;