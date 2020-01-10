import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import About from '../components/About'
import KitchenPoem from './../components/KitchenPoem'
import Haiku from '../features/Haiku'
import AcrosticPoem from '../components/AcrosticPoem'

function Routes() {
   let { url } = useRouteMatch()

   return (
      <>
         <Switch>
            {/* <Route path={`${url}/home`} component={About} /> */}
            <Route path={`${url}/about`} component={About} />
            <Route path={`${url}/kitchen-poem`} component={KitchenPoem} />
            <Route path={`${url}/haiku`} component={Haiku} />
            <Route path={`${url}/acrostic`} component={AcrosticPoem} />
         </Switch>
      </>
   )
}

export default Routes
