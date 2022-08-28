import React, {useContext, useState, useEffect} from "react";
import PropTypes from "prop-types";
import { authHOC, AuthContext } from '../../../context/AuthContext';
import { Box, Button, FormControl, FormHelperText, Input, InputLabel } from '@mui/material';
import styles from './LoginForm.module.css'

function LoginForm(props) {
    const context = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (context.isLoggedIn) {
            props.setPage('map')
        }
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        context.logIn(email, password);
        handleReset();
    };

    const handleReset = () => {
        setEmail('');
        setPassword('');
    }

    const handleClick = () => {
        context.logIn(email, password);
        handleReset();
    };

    return (
        <Box
            component="form"
            name="LoginForm"
            noValidate
            autoComplete="off"
            data-testid="login-form"
            onSubmit={e => handleSubmit(e)}
        >
            <FormControl
                variant="standard"
                required
                fullWidth
                sx={{
                    marginBottom: 3,
                }}
            >
                <InputLabel htmlFor="form-email">Email</InputLabel>
                <Input
                    id="form-email"
                    type="text"
                    name="email"
                    placeholder="test@test.com"
                    required
                    value={email}
                    className={styles.input}
                    onChange={e => setEmail(e.target.value)}
                />
            </FormControl>
            <FormControl
                variant="standard"
                required
                fullWidth
                sx={{
                    marginBottom: 3,
                }}
            >
                <InputLabel htmlFor="form-password">Пароль</InputLabel>
                <Input
                    id="form-password"
                    type="password"
                    name="password"
                    placeholder="test"
                    required
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className={styles.input}
                    aria-describedby="form-password-text"
                />
                <FormHelperText id="form-password-text" className={styles.btn}>
                    Забыли пароль?
                </FormHelperText>
            </FormControl>
            <div className={`${styles.formItem} ${styles.submit}`}>
                <Button
                    fullWidth
                    className={styles.input}
                    onClick={() => handleClick()}
                >
                    Войти
                </Button>
            </div>
        </Box>
    );
}

LoginForm.propsType = {
    page: PropTypes.string,
    setPage: PropTypes.func,
}

export const LoginFormWithAuth = authHOC(LoginForm);