// eslint-disable-next-line no-unused-vars
import React from 'react'
import PropTypes from 'prop-types'
import { connect, useDispatch } from 'react-redux'
import { register } from '../../../actions'

import { Grid, FormControl, InputLabel, Input, Button, InputAdornment } from '@mui/material'
import { Form, Field } from 'react-final-form'
import { Redirect } from 'react-router-dom'
import ClearIcon from '../../common/clearIcon'

import styles from './RegisterForm.module.css'

function RegisterForm (props) {
  const { isLoggedIn, isLoading } = props
  const dispatch = useDispatch()

  if (isLoggedIn) {
    return <Redirect to='/map' />
  }

  const handleSubmit = values => {
    const email = values.email
    const password = values.password
    const name = values.name
    const surname = values.surname
    dispatch(register(email, password, name, surname))
  }

  const initialValues = {
    email: '',
    password: '',
    name: '',
    surname: ''
  }

  const validate = values => {
    const errors = {}

    if (!values.email) {
      errors.email = 'Заполните обязательное поле «Email»'
    }

    if (!values.password) {
      errors.password = 'Заполните обязательное поле «Пароль»'
    }

    if (!values.name) {
      errors.name = 'Заполните обязательное поле «Имя»'
    }

    if (!values.surname) {
      errors.surname = 'Заполните обязательное поле «Фамилия»'
    }

    return errors
  }

  const RegisterForm = () => (
        <Form onSubmit={handleSubmit}
              initialValues={initialValues}
              validate={validate}
              mutators={{
                clearEmail: (args, state, utils) => {
                  utils.changeValue(state, 'email', () => undefined)
                },
                clearName: (args, state, utils) => {
                  utils.changeValue(state, 'name', () => undefined)
                },
                clearSurname: (args, state, utils) => {
                  utils.changeValue(state, 'surname', () => undefined)
                },
                clearPassword: (args, state, utils) => {
                  utils.changeValue(state, 'password', () => undefined)
                }
              }}
        >
            {({ form, handleSubmit, submitting }) => (
                <form data-testid="register-form" onSubmit={handleSubmit}>
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
                                        Адрес электронной почты*
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
                            <Field name="name" render={({ input, meta }) => (
                                <FormControl
                                    fullWidth
                                    sx={{
                                      marginBottom: 3
                                    }}
                                    className={styles.formItem}
                                >
                                    <InputLabel htmlFor="name">
                                        Имя*
                                    </InputLabel>
                                    <Input
                                        id="name"
                                        {...input}
                                        className={styles.input}
                                        placeholder="Петр"
                                        endAdornment={input.value.length >= 1 &&
                                        <InputAdornment position="end">
                                            <ClearIcon onClick={form.mutators.clearName} />
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
                            <Field name="surname" render={({ input, meta }) => (
                                <FormControl
                                    fullWidth
                                    sx={{
                                      marginBottom: 3
                                    }}
                                    className={styles.formItem}
                                >
                                    <InputLabel htmlFor="surname">
                                        Фамилия*
                                    </InputLabel>
                                    <Input
                                        id="surname"
                                        {...input}
                                        className={styles.input}
                                        placeholder="Александров"
                                        endAdornment={input.value.length >= 1 &&
                                        <InputAdornment position="end">
                                            <ClearIcon onClick={form.mutators.clearSurname} />
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
                                    sx={{
                                      marginBottom: 3
                                    }}
                                    className={styles.formItem}
                                >
                                    <InputLabel htmlFor="password">
                                        Пароль*
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
                                Зарегистрироваться
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            )}
        </Form>
  )

  return (
      <RegisterForm/>
  )
}

RegisterForm.propsType = {
  isLoggedIn: PropTypes.bool,
  isLoading: PropTypes.bool,
  register: PropTypes.func
}

export const RegisterFormWithAuth = connect(
  (state) => ({
    isLoggedIn: state.auth.isLoggedIn,
    isLoading: state.loading.isLoading
  }),
  { register }
)(RegisterForm)
