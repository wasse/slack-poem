import React from 'react'
import { Link , useRouteMatch } from 'react-router-dom'

import 'bulma'

// import { observer } from 'mobx-react'

export const Sidemenu = () => {

    let { url } = useRouteMatch()

    return (
        <div className="column is-one-quarter is-full-mobile is-full-tablet">
            <aside className="menu has-background-white">
            <ul className="menu-list">
                <Link to="/home">Home</Link>
                <Link to={`${url}/kitchen-poem`}>Kitchen Poem</Link>
                <li><Link to={`${url}/haiku`}>Haiku</Link></li>
            </ul>
        </aside>
        </div>
    )
}

export default Sidemenu