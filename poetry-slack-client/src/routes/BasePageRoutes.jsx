import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import About from '../components/About'
import KitchenPoem from '../features/KitchenPoem/KitchenPoem'
import Haiku from '../features/Haiku'
import AcrosticPoem from '../features/Acrostic/AcrosticPoem'

function Routes() {
   let { url } = useRouteMatch()

   return (
      <>
         <Switch>
            <Route path={`${url}/about`} component={About} />
            <Route path={`${url}/kitchen-poem`} component={KitchenPoem} />
            <Route path={`${url}/haiku`} component={Haiku} />
            <Route path={`${url}/acrostic`} component={AcrosticPoem} />
         </Switch>
      </>
   )
}

export default Routes
