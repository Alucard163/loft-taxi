import React from "react";
import styles from './App.module.css';

import Header from "../header";
import LoginPage from "../../pages/login";
import RegistrationPage from "../../pages/registration";
import MapPage from "../../pages/map";
import ProfilePage from "../../pages/profile";

const PAGES = {
    map: MapPage,
    login: LoginPage,
    register: RegistrationPage,
    profile: ProfilePage,
}

class App extends React.Component {
    constructor() {
        super();
        this.state = { page: 'login'}
    }

    setPage = (page) => {
        this.setState({ page })
    }

      render() {
        const { page } = this.state;
        const showHeader = page === 'map' || page === 'profile'
        const CurrentPage = PAGES[page];

        return (
            <div className={styles.app}>
                {showHeader && <Header setPage={this.setPage} page={this.state.page} />}
                <CurrentPage setPage={this.setPage} page={this.state.page}/>
            </div>
            )
      };
}

export default App;
