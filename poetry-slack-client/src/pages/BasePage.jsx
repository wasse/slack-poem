import React, { useState, useEffect, useContext } from 'react'
import { useRouteMatch } from 'react-router-dom'
import styles from './BasePage.module.scss'
import Header from '../components/Header'
import Sidemenu from '../components/Sidemenu/Sidemenu'
import BasePageRoutes from '../routes/BasePageRoutes'
import About from '../components/About'
import Footer from '../components/Footer'
import { observer } from 'mobx-react'
import { useStores } from '../custom-hooks/use-stores'
import clsx from 'clsx'

const BasePage = observer(() => {
   const { session } = useStores()
   const styledColumns = clsx('columns', styles.columns)
   return (
      <div>
         <Header />
         <div className={styledColumns}>
            <Sidemenu />
            <div className="column">
               {session.data.isHomePage && <About />}
               <BasePageRoutes />
            </div>
         </div>
         <Footer />
      </div>
   )
})
export default BasePage
