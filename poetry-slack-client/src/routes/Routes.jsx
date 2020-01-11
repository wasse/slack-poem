import React from 'react'
import { Switch, Route } from 'react-router-dom'
import SecureRoute from './SecureRoute'
import { BasePage } from './../pages/BasePage'
import Auth from '../auth/Auth'
import { Login } from '../pages'
import { useStores } from '../custom-hooks/use-stores'
import { observer } from 'mobx-react'

export const Routes = observer(() => {
   const { session } = useStores()
   return (
      <>
         <Switch>
            <Route exact path="/" component={Login} />
            <SecureRoute
               path="/home"
               auth={session.data.isAuthenticated}
               component={BasePage}
            />
         </Switch>
      </>
   )
})
