import React, { useEffect } from 'react'
import { useStores } from '../../custom-hooks/use-stores'
import { fetchAndSetAccessToken } from '../../api-calls/slack-api-calls'
import { Redirect } from 'react-router-dom'
import { observer } from 'mobx-react'

const Callback = observer(() => {
   console.log('Callback rendering')
   const { session } = useStores()

   const urlParams = new URLSearchParams(window.location.search)
   const myParam = urlParams.get('code')
   console.log(myParam)
   session.actions.setCodeParam(myParam)
   console.log('From session data ' + session.data.codeParam)

   useEffect(() => {
      fetchAndSetAccessToken()
   }, [])

   const Component = session.data.isAuthenticated ? (
      <div>
         <Redirect to="/home" />
      </div>
   ) : (
      <div>
         Waiting for isAuthenticated
         {/* <Redirect to="/" /> */}
      </div>
   )

   return Component
})

export default Callback
