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
            <div data-testid="registration-page" className={styles.registration}>
                <Aside />
                <Auth setPage={this.props.setPage} page={this.props.page}/>
            </div>
        )
    }
}

export default RegistrationPage