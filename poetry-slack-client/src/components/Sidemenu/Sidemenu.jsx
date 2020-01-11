import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import styles from './Sidemenu.module.scss'
import { useStores } from '../../custom-hooks/use-stores'

const Sidemenu = () => {
   let { url } = useRouteMatch()

   const { session } = useStores()
   const handleClick = () => {
      session.actions.setIsHomePage(false)
   }
   return (
      <div
         className={
            styles.column + ' column is-one-fifth is-full-mobile is-full-tablet'
         }
      >
         <aside className={styles.menu + ' menu has-background-white'}>
            <ul className="menu-list">
               <li className={styles.listitem} onClick={() => handleClick()}>
                  <Link to={`${url}/about`}>About</Link>
               </li>
               <li className={styles.listitem} onClick={() => handleClick()}>
                  <Link to={`${url}/kitchen-poem`}>Kitchen Poem</Link>
               </li>
               <li className={styles.listitem} onClick={() => handleClick()}>
                  <Link to={`${url}/haiku`}>Haiku</Link>
               </li>
               <li className={styles.listitem} onClick={() => handleClick()}>
                  <Link to={`${url}/acrostic`}>Acrostic Poem</Link>
               </li>
            </ul>
         </aside>
      </div>
   )
}

export default Sidemenu
