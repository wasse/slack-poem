import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import About from '../components/About'
import KitchenPoem from './../components/KitchenPoem'
import KitchenPoemStart from './../components/KitchenPoemStart'
import Haiku from './../components/Haiku'
import AcroticPoem from './../components/AcroticPoem'

function Routes() {

    let { url } = useRouteMatch()

    return (
        // <div className="column is-two-third">
            <Switch>
                {/* <Route exact path="/" component={Home}/> */}
                <Route exact path="/home" component={About} />
                <Route path={`${url}/kitchen-poem`} component={KitchenPoem}/>
                <Route path={`${url}/start`} component={KitchenPoemStart}/>

                <Route path={`${url}/haiku`} component={Haiku}/>
                <Route path={`${url}/acrotic`} component={AcroticPoem}/>
                {/* <Route><PageNotFound /></Route> */}
            </Switch>
        // </div>
    )
}

export default Routes