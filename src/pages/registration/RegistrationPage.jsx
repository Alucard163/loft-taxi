import React from "react";
import PropTypes from "prop-types";

import Aside from "../../components/aside";
import Auth from "../../components/auth";
import { connect } from 'react-redux';

import styles from "./RegistrationPage.module.css"

class RegistrationPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div data-testid="registration-page" className={styles.registration}>
                <Aside />
                <Auth />
            </div>
        )
    }
}

RegistrationPage.propTypes = {
    isLoggedIn: PropTypes.bool,
}

export default connect(
    (state) => ({ isLoggedIn: state.auth.isLoggedIn }),
    null
) (RegistrationPage);