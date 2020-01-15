import React from 'react'
import { useStores } from '../../custom-hooks/use-stores'
import { fetchAndSetAccessToken } from '../../api-calls/slack-api-calls'
import { Redirect } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Callback = () => {
   const { session } = useStores()

   const urlParams = new URLSearchParams(window.location.search)
   const myParam = urlParams.get('code')
   console.log(myParam)
   session.actions.setCodeParam(myParam)
   console.log('From session data ' + session.data.codeParam)

   fetchAndSetAccessToken()

   console.log('Is authenticated ' + session.data.isAuthenticated)

   const Component = session.data.isAuthenticated ? (
      <div>
         <Redirect to="/home" />
      </div>
   ) : (
      <div>
         <FontAwesomeIcon icon="fa-spinner" />
      </div>
   )

   return Component
}

export default Callback
