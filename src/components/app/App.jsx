import React from "react";
import styles from './App.module.css';

import PrivateRoute from "../../pages/private";
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router';
import { logIn } from "../../actions";

import Header from "../header";
import LoginPage from "../../pages/login";
import RegistrationPage from "../../pages/registration";
import MapPage from "../../pages/map";
import ProfilePage from "../../pages/profile";

class App extends React.Component {
    constructor() {
        super();
    }

      render() {
          let storageIsLoggedIn = false;

          if (localStorage.length && localStorage.getItem('token')) {
              storageIsLoggedIn = JSON.parse(localStorage.getItem('token')).auth.isLoggedIn;
          }
        const { isLoggedIn } = this.props;

        return (
            <div className={styles.app}>
                {isLoggedIn && <Header />}
                <Switch>
                    {
                        storageIsLoggedIn
                            ?
                            (<>
                                <PrivateRoute path="/map" component={MapPage} />
                                <PrivateRoute path="/profile" component={ProfilePage} />
                                <Redirect to="/map" />

                            </>)
                            : (<>
                                <Route exact path="/" component={LoginPage} />
                                <Route exact path="/signup" component={RegistrationPage} />
                                <Redirect to="/" />
                            </>)
                    }
                </Switch>
            </div>
            )
      };
}

export default connect(
    (state) => ({ isLoggedIn: state.auth.isLoggedIn }),
    { logIn }
)(App);
