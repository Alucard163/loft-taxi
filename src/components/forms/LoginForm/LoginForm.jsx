// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Box, Button, FormControl, FormHelperText, Input, InputLabel } from '@mui/material'
import { authenticate } from '../../../actions'
import { Redirect } from 'react-router-dom'
import { connect, useDispatch } from 'react-redux'

import styles from './LoginForm.module.css'

function LoginForm (props) {
  // eslint-disable-next-line react/prop-types
  const { isLoggedIn, isLoading } = props
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  if (isLoggedIn) {
    return <Redirect to='/map' />
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(authenticate(email, password))
    handleReset()
  }

  const handleReset = () => {
    setEmail('')
    setPassword('')
  }

  const handleClick = () => {
    dispatch(authenticate(email, password))
    handleReset()
  }

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
                  marginBottom: 3
                }}
            >
                <InputLabel htmlFor="form-email">Email</InputLabel>
                <Input
                    id="form-email"
                    type="text"
                    name="email"
                    placeholder="email@example.com"
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
                  marginBottom: 3
                }}
            >
                <InputLabel htmlFor="form-password">Пароль</InputLabel>
                <Input
                    id="form-password"
                    type="password"
                    name="password"
                    placeholder="password"
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
                {isLoading
                  ? (
                        <Button
                            fullWidth
                            className={styles.input}
                            disabled
                        >
                            Загрузка...
                        </Button>
                    )
                  : (
                        <Button
                            fullWidth
                            className={styles.input}
                            onClick={handleClick}
                        >
                            Войти
                        </Button>
                    )}
            </div>
        </Box>
  )
}

LoginForm.propsType = {
  isLoggedIn: PropTypes.bool,
  isLoading: PropTypes.bool
}

export const LoginFormWithAuth = connect(
  (state) => ({
    isLoggedIn: state.auth.isLoggedIn,
    isLoading: state.loading.isLoading
  }),
  { authenticate }
)(LoginForm)
