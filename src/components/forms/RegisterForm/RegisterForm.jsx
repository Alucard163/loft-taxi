import React from "react";
import styles from './RegisterForm.module.css'

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: "", name: "", password: "" };
    }

    handleSubmit = event => {
        event.preventDefault();
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const { email, name, password } = this.state;
        const { setPage } =  this.props;

        return (
            <form onSubmit={this.handleSubmit}>
                <div className={styles.formItem}>
                    <label>
                        <span>Email*</span>
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
                        <span>Как вас зовут?*</span>
                        <input
                            type="text"
                            name="name"
                            className={styles.input}
                            value={name}
                            onChange={this.handleChange}
                        />
                    </label>
                </div>
                <div className={styles.formItem}>
                    <label>
                        <span>Придумайте пароль*</span>
                        <input
                            type="text"
                            name="password"
                            className={styles.input}
                            value={password}
                            onChange={this.handleChange}
                        />
                    </label>
                </div>
                <div className={`${styles.formItem} ${styles.submit}`}>
                    <input className={styles.input} type="submit" value="Зарегистрироваться" onClick={() => setPage('map')} />
                </div>
            </form>
        );
    }
}

export default RegisterForm;