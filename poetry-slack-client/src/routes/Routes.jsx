import React from 'react'
import { Switch, Route } from 'react-router-dom'
import SecureRoute from './SecureRoute'
import BasePage from './../pages/BasePage'
import isAuthenticated from '../authentication-authorization/Auth'
import { Login } from '../pages'

function Routes() {
   return (
      <>
         <Switch>
            <Route exact path="/" component={Login} />
            <SecureRoute
               path="/home"
               auth={isAuthenticated()}
               component={BasePage}
            />
         </Switch>
      </>
   )
}

export default Routes
