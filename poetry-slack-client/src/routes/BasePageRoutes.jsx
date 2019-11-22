import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import About from '../components/About'
import KitchenPoem from './../components/KitchenPoem'
import Haiku from './../components/Haiku'

function Routes() {

    let { url } = useRouteMatch()

    return (
        <div className="column is-two-third">
            <Switch>
                {/* <Route exact path="/" component={Home}/> */}
                <Route exact path="/home" component={About} />
                <Route path={`${url}/kitchen-poem`} component={KitchenPoem}/>
                <Route path={`${url}/haiku`} component={Haiku}/>
                {/* <Route><PageNotFound /></Route> */}
            </Switch>
        </div>
    )
}

export default Routes