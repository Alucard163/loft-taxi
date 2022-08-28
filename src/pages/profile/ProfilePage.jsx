import React from "react";
import PropTypes from "prop-types";

import styles from './ProfilePage.module.css';

class ProfilePage extends React.Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        page: PropTypes.string,
        setPage: PropTypes.func,
    }

    render() {
        return (
            <div data-testid="profile-page" className={styles.profile}>
                <h1>Profile Page</h1>
            </div>
        )
    }
}

export default ProfilePage;