import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect, useDispatch } from "react-redux";
import { register } from "../../../actions";

import { Box, Button, FormControl, Input, InputLabel } from '@mui/material';

import styles from './RegisterForm.module.css';
import { Redirect } from "react-router-dom";

function RegisterForm(props, {useDispatchHook=useDispatch}) {
    const { isLoggedIn, isLoading } = props;
    const dispatch = useDispatchHook();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurName] = useState('');
    const [password, setPassword] = useState('');

    if (isLoggedIn) {
        return <Redirect to='/map' />
    }

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(register(email, password, name, surname));
        handleReset();
    };

    const handleReset = e => {
        setEmail('');
        setPassword('');
        setName('');
        setSurName('');
    }

    const handleClick = () => {
        dispatch(register(email, password, name, surname));
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
                    placeholder="email@example.com"
                    className={styles.input}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </FormControl>
            <FormControl
                variant="standard"
                fullWidth
                required
                className={styles.formItem}
            >
                <InputLabel htmlFor="form-name">Как вас зовут?*</InputLabel>
                <Input
                    id="form-name"
                    type="text"
                    name="name"
                    placeholder="Петр"
                    required
                    className={styles.input}
                    value={name}
                    onChange={e=> setName(e.target.value)}
                />
            </FormControl>
            <FormControl
                variant="standard"
                fullWidth
                required
                className={styles.formItem}
            >
                <InputLabel htmlFor="form-surname">Ваша фамилия?*</InputLabel>
                <Input
                    id="form-surname"
                    type="text"
                    name="surname"
                    placeholder="Александров"
                    required
                    className={styles.input}
                    value={surname}
                    onChange={e=> setSurName(e.target.value)}
                />
            </FormControl>
            <FormControl
                variant="standard"
                fullWidth
                required
                className={styles.formItem}
            >
                <InputLabel htmlFor="form-password">Придумайте пароль*</InputLabel>
                <Input
                    id="form-password"
                    type="password"
                    name="password"
                    placeholder="password"
                    required
                    className={styles.input}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </FormControl>
            <div className={`${styles.formItem} ${styles.submit}`}>
                {isLoading ? (
                    <Button fullWidth className={styles.input} disabled>
                        Загрузка...
                    </Button>
                ) : (
                    <Button fullWidth className={styles.input} onClick={() => handleClick()} >
                        Зарегистрироваться
                    </Button>
                )}

            </div>
        </Box>
    );
}

RegisterForm.propsType = {
    isLoggedIn: PropTypes.bool,
    isLoading: PropTypes.bool,
    register: PropTypes.func
}

export const RegisterFormWithAuth = connect(
    (state) => ({
        isLoggedIn: state.auth.isLoggedIn,
        isLoading: state.loading.isLoading,
    }),
    { register }
) (RegisterForm);