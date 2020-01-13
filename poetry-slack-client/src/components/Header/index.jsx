import React from 'react'
import 'bulma'
import { observer } from 'mobx-react'
import { useStores } from '../../custom-hooks/use-stores'
import { Link } from 'react-router-dom'

import Button from '../Button'

const Header = observer(() => {
   const { session } = useStores()

   return (
      <div className="hero is-primary">
         <div className="contents is-centered">
            <div className="hero-body">
               <Link
                  to="/home"
                  onClick={() => {
                     session.actions.setIsHomePage(true)
                  }}
               >
                  <h1 className="title is-bold is-1">Poetry-Slack</h1>
                  <h2 className="subtitle">Coming soon!</h2>
               </Link>
            </div>
         </div>
         <div className="navbar-end">
            <div className="navbar-item">
               <Button
                  className="button"
                  children="Log Out"
                  onClick={() => session.actions.toggleAuth(false)}
               ></Button>
            </div>
         </div>
      </div>
   )
})
export default Header
