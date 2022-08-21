import React from "react";

import styles from './LoginForm.module.css'

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
    }

    state = { email: "", password: "" };

    handleSubmit = event => {
        event.preventDefault();
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const { email, password } = this.state;
        const { setPage } =  this.props;

        return (
            <form onSubmit={this.handleSubmit}>
                <div className={styles.formItem}>
                    <label>
                        <span>Email</span>
                        <input
                            type="text"
                            name="email"
                            className={styles.input}
                            value={email}
                            onChange={this.handleChange}
                        />
                    </label>
                </div>
                <div className={styles.formItem}>
                    <label>
                        <span>Пароль</span>
                        <input
                            type="text"
                            name="password"
                            className={styles.input}
                            value={password}
                            onChange={this.handleChange}
                        />
                    </label>
                    <div className={styles.btn}>Забыли пароль?</div>
                </div>
                <div className={`${styles.formItem} ${styles.submit}`}>
                    <input className={styles.input} type="submit" value="Войти" onClick={() => setPage('map')} />
                </div>
            </form>
        );
    }
}

export default LoginForm;