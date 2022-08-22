import React from "react";

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
            <div className={styles.auth}>
                <div className={styles.container}>
                    <div className={styles.wrap}>
                        <h4 className={styles.in}>
                            {isLoginPage ? 'Войти' : 'Зарегистрироваться'}
                        </h4>
                        {isLoginPage ? <LoginForm setPage={setPage} page={page}/> : <RegisterForm setPage={setPage} page={page}/> }
                        <div>
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

export default Auth;