import React from "react";

import Aside from "../../components/aside";
import Auth from "../../components/auth";

import styles from "./RegistrationPage.module.css"

class RegistrationPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { setPage } =  this.props;
        const { page } = this.props;

        return (
            <div data-testid="registration-page" className={styles.registration}>
                <Aside />
                <Auth setPage={setPage} page={page}/>
            </div>
        )
    }
}

export default RegistrationPage