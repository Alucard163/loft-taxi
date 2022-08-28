import React, {useContext, useState, useEffect} from "react";
import PropTypes from "prop-types";
import { authHOC, AuthContext } from '../../../context/AuthContext';
import { Box, Button, FormControl, FormHelperText, Input, InputLabel } from '@mui/material';

import styles from './RegisterForm.module.css'

function RegisterForm(props) {
    const context = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');


    useEffect(() => {
        if (context.isLoggedIn) {
            props.setPage('map')
        }
    });

    const handleSubmit = event => {
        event.preventDefault();
        context.logIn(email, password);
        handleReset();
    };

    const handleReset = e => {
        setEmail('');
        setPassword('');
        setName('');
    }

    const handleClick = () => {
        context.logIn(email, password);
        handleReset();
    };

    return (
        <Box
            component="form"
            name="RegisterForm"
            noValidate
            autoComplete="off"
            data-testid="register-form"
            onSubmit={e => handleSubmit(e)}
        >
            <FormControl
                variant="standard"
                fullWidth
                className={styles.formItem}
            >
                <InputLabel htmlFor="form-email">Email*</InputLabel>
                <Input
                    id="form-email"
                    type="text"
                    name="email"
                    placeholder="test@test.com"
                    className={styles.input}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </FormControl>
            <FormControl
                variant="standard"
                fullWidth
                className={styles.formItem}
            >
                <InputLabel htmlFor="form-name">Как вас зовут?*</InputLabel>
                <Input
                    id="form-name"
                    type="text"
                    name="name"
                    placeholder="Петр Александрович"
                    className={styles.input}
                    value={name}
                    onChange={e=> setName(e.target.value)}
                />
            </FormControl>
            <FormControl
                variant="standard"
                fullWidth
                className={styles.formItem}
            >
                <InputLabel htmlFor="form-password">Придумайте пароль*</InputLabel>
                <Input
                    id="form-password"
                    type="password"
                    name="password"
                    placeholder="test"
                    className={styles.input}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </FormControl>
            <div className={`${styles.formItem} ${styles.submit}`}>
                <Button fullWidth className={styles.input} onClick={() => handleClick()} >
                    Зарегистрироваться
                </Button>
            </div>
        </Box>
    );
}

RegisterForm.propsType = {
    page: PropTypes.string,
    setPage: PropTypes.func,
}

export const RegisterFormWithAuth = authHOC(RegisterForm);