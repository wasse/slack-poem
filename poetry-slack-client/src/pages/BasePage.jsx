import React, { useState, useEffect, useContext } from 'react'
import { useRouteMatch } from 'react-router-dom'
import Header from '../components/Header'
import Sidemenu from '../components/Sidemenu/Sidemenu'
import BasePageRoutes from '../routes/BasePageRoutes'
import About from '../components/About'
import { observer } from 'mobx-react'
import { useStores } from '../custom-hooks/use-stores'

const BasePage = observer(() => {
   const { session } = useStores()
   return (
      <div>
         <Header />
         <div className="columns">
            <Sidemenu />
            {session.data.isHomePage && <About />}
            <BasePageRoutes />
         </div>
      </div>
   )
})
export default BasePage
