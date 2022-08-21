import React from "react";

import Aside from "../../components/aside";
import Auth from "../../components/auth";

import styles from "./RegistrationPage.module.css"

class RegistrationPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.registration}>
                <Aside />
                <Auth {...this.props}/>
            </div>
        )
    }
}

export default RegistrationPage