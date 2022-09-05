import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import LoginForm from "../forms/LoginForm";
import RegisterForm from "../forms/RegisterForm";

import styles from './Auth.module.css';

class Auth extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoggedIn: this.props.isLoggedIn }
    }

    render() {
        const { isLoggedIn } = this.state;

        if (isLoggedIn) {
            return <Redirect to='/map' />
        }

        return (
            <div data-testid="auth-component" className={styles.auth}>
                <div className={styles.container}>
                    <div className={styles.wrap}>
                        <h4 className={styles.in}>
                            {!isLoggedIn ? 'Войти' : 'Зарегистрироваться'}
                        </h4>
                        <Switch>
                            <Route exact path="/" component={LoginForm} />
                            <Route exact path="/signup" component={RegisterForm} />
                        </Switch>
                        <div data-testid="auth-text">
                            {!isLoggedIn ?
                                <p>Новый пользователь? <Link className={styles.link} to="/signup" >Зарегистрируйтесь</Link></p>
                                : <p>Уже зарегистрированы? <Link className={styles.link} to="/">Войти</Link></p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Auth.propTypes = {
    isLoggedIn: PropTypes.bool,
}

export default connect(
    (state) => ({ isLoggedIn: state.auth.isLoggedIn }),
    null)
(Auth);