import React from "react";
import PropTypes from "prop-types";

import Aside from "../../components/aside";
import Auth from "../../components/auth";

import styles from './LoginPage.module.css'

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        page: PropTypes.string,
        setPage: PropTypes.func,
    }

    render() {
        const { setPage, page } =  this.props;

        return (
            <div data-testid="login-page" className={styles.login}>
                <Aside />
                <Auth setPage={setPage} page={page}/>
            </div>
        )
    }
}

export default LoginPage;