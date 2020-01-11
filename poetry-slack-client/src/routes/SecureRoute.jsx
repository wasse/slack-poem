import React from 'react'
import { Route } from 'react-router-dom'
import { Redirect } from 'react-router'
import PropTypes from 'prop-types'

const SecureRoute = ({ component: Component, auth, ...other }) => {
   return (
      <Route
         {...other}
         render={props => {
            if (auth === false) return <Redirect to="/" />
            if (auth) return <Component auth={auth} {...props} />
         }}
      />
   )
}

SecureRoute.propTypes = {
   // component: PropTypes.func.isRequired,
   auth: PropTypes.bool.isRequired,
}

SecureRoute.defaultProps = {
   auth: false,
}

export default SecureRoute
