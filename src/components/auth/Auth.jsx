import React from "react";

import LoginForm from "../forms/LoginForm";
import RegisterForm from "../forms/RegisterForm";
import styles from './Auth.module.css';

class Auth extends React.Component {
    constructor(props) {
        super(props);
    }
    isLoginPage = this.props.page === 'login'

    render() {
        const { setPage } =  this.props;

        return (
            <div className={styles.auth}>
                <div className={styles.container}>
                    <div className={styles.wrap}>
                        <h4 className={styles.in}>
                            {this.isLoginPage ? 'Войти' : 'Зарегистрироваться'}
                        </h4>
                        {this.isLoginPage ? <LoginForm {...this.props}/> : <RegisterForm {...this.props}/> }
                        <div>
                            {this.isLoginPage ?
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

export default Auth;