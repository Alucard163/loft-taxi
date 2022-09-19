// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux'

export const PrivateRoute = connect(state => ({ isLoggedIn: state.auth.isLoggedIn }))(
  ({ component: Component, isLoggedIn, ...rest }) => (
        <Route
            {...rest}
            render={props => isLoggedIn ? (<Component {...props} />) : (<Redirect to='/' />)}
        />
  )
)
