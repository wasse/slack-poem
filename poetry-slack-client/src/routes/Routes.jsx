import React from 'react'
import { Switch, Route } from 'react-router-dom';

import Home from './../components/Home'
import KitchenPoem from './../components/KitchenPoem'
import Haiku from './../components/Haiku'

function Routes() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/kitchen-poem" component={KitchenPoem}/>
                <Route path="/haiku" component={Haiku}/>
                {/* <Route><PageNotFound /></Route> */}
            </Switch>
        </div>
    )
}

export default Routes