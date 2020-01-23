import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import SecureRoute from './SecureRoute'
import BasePage from './../pages/BasePage'
import { Login } from '../pages'
import { useStores } from '../custom-hooks/use-stores'
import { observer } from 'mobx-react'
import Callback from '../pages/Callback/Callback'

export const Routes = observer(() => {
   const { session } = useStores()
   return (
      <>
         <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/callback" component={Callback} />
            <SecureRoute
               path="/home"
               auth={session.data.isAuthenticated}
               component={BasePage}
            />
         </Switch>
      </>
   )
})
