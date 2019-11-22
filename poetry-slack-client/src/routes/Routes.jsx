import React from 'react'
import { Switch, Route } from 'react-router-dom';

import BasePage from './../pages/BasePage'

function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={BasePage}/>
            <Route path="/login"/>
            <Route path="/home" component={BasePage}/>
        </Switch>
    )
}

export default Routes