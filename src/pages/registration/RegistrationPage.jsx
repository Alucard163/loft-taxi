import React from "react";
import PropTypes from "prop-types";

import Aside from "../../components/aside";
import Auth from "../../components/auth";

import styles from "./RegistrationPage.module.css"

class RegistrationPage extends React.Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        page: PropTypes.string,
        setPage: PropTypes.func,
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