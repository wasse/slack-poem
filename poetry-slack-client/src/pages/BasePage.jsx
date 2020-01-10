import React from 'react'

import Header from '../components/Header'
import Sidemenu from '../components/Sidemenu'
import BasePageRoutes from '../routes/BasePageRoutes'

export const BasePage = () => {
   return (
      <div>
         <Header />
         <div className="columns">
            <Sidemenu></Sidemenu>
            <BasePageRoutes />
         </div>
      </div>
   )
}

export default BasePage
