import React from 'react'
import { Link } from 'react-router-dom'

// import { observer } from 'mobx-react'

export const Sidemenu = () => {
   // render() {
        return (
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/kitchen-poem">Kitchen Poem</Link></li>
            <li><Link to="/haiku">Haiku</Link></li>
        </ul>
        )
    //}
}