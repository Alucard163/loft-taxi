// eslint-disable-next-line no-unused-vars
import React from 'react'
import PropTypes from 'prop-types'
import { Button, FormControl, FormHelperText, Grid, Input, InputAdornment, InputLabel } from '@mui/material'
import { authenticate } from '../../../actions'
import { Redirect } from 'react-router-dom'
import { connect, useDispatch } from 'react-redux'

import styles from './LoginForm.module.css'
import { Field, Form } from 'react-final-form'
import ClearIcon from '../../common/clearIcon'

function LoginForm (props) {
  const { isLoggedIn, isLoading } = props
  const dispatch = useDispatch()

  if (isLoggedIn) {
    return <Redirect to='/map' />
  }

  const handleSubmit = (values) => {
    const email = values.email
    const password = values.password
    dispatch(authenticate(email, password))
  }

  const initialValues = {
    email: '',
    password: ''
  }

  const validate = values => {
    const errors = {}

    if (!values.email) {
      errors.email = 'Заполните обязательное поле «Email»'
    }

    if (!values.password) {
      errors.password = 'Заполните обязательное поле «Пароль»'
    }

    return errors
  }

  const LoginForm = () => (
        <Form onSubmit={handleSubmit}
              initialValues={initialValues}
              validate={validate}
              mutators={{
                clearEmail: (args, state, utils) => {
                  utils.changeValue(state, 'email', () => undefined)
                },
                clearPassword: (args, state, utils) => {
                  utils.changeValue(state, 'password', () => undefined)
                }
              }}
        >
            {({ form, handleSubmit, submitting }) => (
                <form data-testid="login-form" onSubmit={handleSubmit}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Field name="email" render={({ input, meta }) => (
                                <FormControl
                                    fullWidth
                                    className={styles.formItem}
                                    sx={{
                                      marginBottom: 3
                                    }}
                                >
                                    <InputLabel htmlFor="email">
                                        Email *
                                    </InputLabel>
                                    <Input
                                        autoComplete="off"
                                        id="email"
                                        {...input}
                                        className={styles.input}
                                        placeholder="email@example.com"
                                        endAdornment={input.value.length >= 1 &&
                                            <InputAdornment position="end">
                                                <ClearIcon onClick={form.mutators.clearEmail} />
                                            </InputAdornment>
                                        }
                                        required
                                    />
                                    {
                                        meta.touched && meta.error &&
                                        <span className={styles.error}>
                                            {meta.error}
                                        </span>
                                    }
                                </FormControl>
                            )}/>
                        </Grid>

                        <Grid item xs={12}>
                            <Field name="password" render={({ input, meta }) => (
                                <FormControl
                                    fullWidth
                                    className={styles.formItem}
                                    sx={{
                                      marginBottom: 3
                                    }}
                                >
                                    <InputLabel htmlFor="password">
                                        Пароль *
                                    </InputLabel>
                                    <Input
                                        type="password"
                                        id="password"
                                        {...input}
                                        className={styles.input}
                                        placeholder="password"
                                        endAdornment={input.value.length >= 1 &&
                                            <InputAdornment position="end">
                                                <ClearIcon onClick={form.mutators.clearPassword} />
                                            </InputAdornment>
                                        }
                                        required
                                    />
                                    {
                                        meta.touched && meta.error &&
                                        <span className={styles.error}>
                                            {meta.error}
                                        </span>
                                    }
                                    <FormHelperText className={styles.btn}>
                                        Забыли пароль?
                                    </FormHelperText>
                                </FormControl>
                            )}/>
                        </Grid>
                        <Grid item xs={12} align="center" className={`${styles.formItem} ${styles.submit}`}>
                            <Button
                                fullWidth
                                className={styles.input}
                                disabled={isLoading || submitting}
                                data-testid="form-submit-btn"
                                size="large"
                                type="submit"
                                variant="contained"
                                color="primary"
                            >
                                Войти
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            )}
        </Form>
  )

  return (
      <LoginForm />
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
