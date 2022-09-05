import React, { useState, useEffect} from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { register } from "../../../actions";

import { Box, Button, FormControl, FormHelperText, Input, InputLabel } from '@mui/material';

import styles from './RegisterForm.module.css';
import { Redirect } from "react-router-dom";

function RegisterForm(props) {
    const { isLoggedIn } = props;
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');


    useEffect(() => {
        if (isLoggedIn) {
            return <Redirect to='/map' />
        }
    });

    const handleSubmit = event => {
        event.preventDefault();
        props.register(email, password, name)
        handleReset();
    };

    const handleReset = e => {
        setEmail('');
        setPassword('');
        setName('');
    }

    const handleClick = () => {
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
                    placeholder="Петр Александрович"
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
                <Button fullWidth className={styles.input} onClick={() => handleClick()} >
                    Зарегистрироваться
                </Button>
            </div>
        </Box>
    );
}

RegisterForm.propsType = {
    isLoggedIn: PropTypes.bool,
    registration: PropTypes.func
}

export const RegisterFormWithAuth = connect(
    (state) => ({ isLoggedIn: state.auth.isLoggedIn }),
    { register }
) (RegisterForm);