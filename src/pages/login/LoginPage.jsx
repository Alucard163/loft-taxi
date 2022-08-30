import React from "react";
import PropTypes from "prop-types";

import Aside from "../../components/aside";
import Auth from "../../components/auth";

import styles from './LoginPage.module.css'

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { setPage, page } =  this.props;

        return (
            <div data-testid="login-page" className={styles.login}>
                {process.env.MAPBOX_ACCESS_TOKEN}
                <Aside />
                <Auth setPage={setPage} page={page}/>
            </div>
        )
    }
}

LoginPage.propTypes = {
    page: PropTypes.string,
    setPage: PropTypes.func,
}

export default LoginPage;