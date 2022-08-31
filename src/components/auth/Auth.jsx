import React from "react";
import PropTypes from "prop-types";

import LoginForm from "../forms/LoginForm";
import RegisterForm from "../forms/RegisterForm";

import styles from './Auth.module.css';

class Auth extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoginPage: props.page === 'login'}
    }

    render() {
        const { setPage, page } =  this.props;
        const { isLoginPage } = this.state;

        return (
            <div data-testid="auth-component" className={styles.auth}>
                <div className={styles.container}>
                    <div className={styles.wrap}>
                        <h4 className={styles.in}>
                            {isLoginPage ? 'Войти' : 'Зарегистрироваться'}
                        </h4>
                        {isLoginPage ?
                            <LoginForm setPage={setPage} page={page}/>
                            : <RegisterForm setPage={setPage} page={page}/>
                        }
                        <div data-testid="auth-text">
                            {isLoginPage ?
                                <p>Новый пользователь? <span className={styles.link} onClick={() => setPage('register')} >Зарегистрируйтесь</span></p>
                                : <p>Уже зарегистрированы? <span className={styles.link} onClick={() => setPage('login')}>Войти</span></p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Auth.propTypes = {
    page: PropTypes.string,
    setPage: PropTypes.func,
}

export default Auth;