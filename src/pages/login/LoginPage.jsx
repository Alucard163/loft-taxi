import React from "react";
import Aside from "../../components/aside";
import Auth from "../../components/auth";

import styles from './LoginPage.module.css'

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <>
            <div data-testid="login-page" className={styles.login}>
                <Aside />
                <Auth {...this.props}/>
            </div>
        </>
    }
}

export default LoginPage;