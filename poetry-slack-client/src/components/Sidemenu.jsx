import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import styles from './Sidemenu.module.scss'

import 'bulma'

// import { observer } from 'mobx-react'

const Sidemenu = () => {
   let { url } = useRouteMatch()

   return (
      <div
         className={
            styles.column + ' column is-one-fifth is-full-mobile is-full-tablet'
         }
      >
         <aside className={styles.menu + ' menu has-background-white'}>
            <ul className="menu-list">
               <li className={styles.listitem}>
                  <Link to={`${url}/about`}>About</Link>
               </li>
               <li className={styles.listitem}>
                  <Link to={`${url}/kitchen-poem`}>Kitchen Poem</Link>
               </li>
               <li className={styles.listitem}>
                  <Link to={`${url}/haiku`}>Haiku</Link>
               </li>
               <li className={styles.listitem}>
                  <Link to={`${url}/acrostic`}>Acrostic Poem</Link>
               </li>
            </ul>
         </aside>
      </div>
   )
}

export default Sidemenu
