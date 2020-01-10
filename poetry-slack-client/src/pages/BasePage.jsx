import React, { useState, useEffect } from 'react'
import { useRouteMatch } from 'react-router-dom'
import Header from '../components/Header'
import Sidemenu from '../components/Sidemenu'
import BasePageRoutes from '../routes/BasePageRoutes'
import About from '../components/About'

export const BasePage = () => {
   // Villkoret nedan bör sättas till true om man navigerar till routen /home och false om man navigerar till någon annat.
   // Detta kan möjligen göras med mobx och context när man klickar på någon av länkarna.
   // const [amHome, setAmHome] = useState(false)
   // let { url } = useRouteMatch()

   // // Similar to componentDidMount and componentDidUpdate:
   // useEffect(() => {
   //    // setAbout(!about)
   //    console.log(url)
   // })

   return (
      <div>
         <Header />
         <div className="columns">
            <Sidemenu />
            {/* {url.endsWith('/home') && <About />} */}
            <BasePageRoutes />
         </div>
      </div>
   )
}

export default BasePage
