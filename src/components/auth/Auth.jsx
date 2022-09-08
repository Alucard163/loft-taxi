import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Switch, Route, Link, Redirect, useLocation } from "react-router-dom";
import { connect } from "react-redux";

import LoginForm from "../forms/LoginForm";
import RegisterForm from "../forms/RegisterForm";

import styles from './Auth.module.css';

function Auth(props) {
    const { isLoggedIn } = props;
    const location = useLocation();
    const [currentPage, setCurrentPage] = useState(location.pathname)

    useEffect(() => {
        setCurrentPage(location.pathname)
    }, [location.pathname]);

    if (isLoggedIn) {
        return <Redirect to='/map' />
    }

    return (
        <div data-testid="auth-component" className={styles.auth}>
            <div className={styles.container}>
                <div className={styles.wrap}>
                    <h4 className={styles.in}>
                        {currentPage === '/' ? 'Войти' : 'Зарегистрироваться'}
                    </h4>
                    <Switch>
                        <Route exact path="/" component={LoginForm} />
                        <Route exact path="/signup" component={RegisterForm} />
                    </Switch>
                    <div data-testid="auth-text">
                        {currentPage === '/' ?
                            <p>Новый пользователь? <Link className={styles.link} to="/signup" >Зарегистрируйтесь</Link></p>
                            : <p>Уже зарегистрированы? <Link className={styles.link} to="/">Войти</Link></p>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

Auth.propTypes = {
    isLoggedIn: PropTypes.bool,
}

export default connect(
    (state) => ({ isLoggedIn: state.auth.isLoggedIn }),
    null)
(Auth);