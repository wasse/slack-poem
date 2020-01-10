import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'

import About from '../components/About'
import KitchenPoem from '../features/KitchenPoem/KitchenPoem'
import Haiku from './../features/Haiku/Haiku'
import AcrosticPoem from './../components/AcrosticPoem'

function Routes() {
   let { url } = useRouteMatch()

    return (
        // <div className="column is-two-third">
            <Switch>
                {/* <Route exact path="/" component={Home}/> */}
                <Route exact path="/home" component={About} />
                <Route path={`${url}/kitchen-poem`} component={KitchenPoem}/>

                <Route path={`${url}/haiku`} component={Haiku}/>
                <Route path={`${url}/acrostic`} component={AcrosticPoem}/>
                {/* <Route><PageNotFound /></Route> */}
            </Switch>
        // </div>
    )
}

export default Routes
