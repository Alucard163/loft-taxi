import React from "react";

import Aside from "../../components/aside";
import Auth from "../../components/auth";

import styles from './LoginPage.module.css'

function LoginPage() {
    return (
        <div data-testid="login-page" className={styles.login}>
            {process.env.MAPBOX_ACCESS_TOKEN}
            <Aside />
            <Auth />
        </div>
    )
}

export default LoginPage;