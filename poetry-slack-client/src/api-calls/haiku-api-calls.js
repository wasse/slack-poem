import HaikuStore from '../stores/HaikuStore'
import { trackPromise } from 'react-promise-tracker'

export const fetchGeneratedHaiku = text => {
   const ServerURI = process.env.REACT_APP_API_HAIKUPOST
   trackPromise(
      fetch(ServerURI, {
         body: JSON.stringify({ text: text }),
         headers: {
            'Content-Type': 'application/json'
         },
         method: 'POST'
      })
         .then(response => response.json())
         .then(result => {
            if (result.haiku) {
               HaikuStore.actions.setHaiku(result.haiku)
               HaikuStore.actions.setError(false)
               HaikuStore.actions.setHaikuIsLoading(false)
            } else {
               HaikuStore.actions.setHaiku(result.errorHaiku)
               HaikuStore.actions.setErrorMessage(result.message)
               HaikuStore.actions.setTitle('ERROR')
               HaikuStore.actions.setError(true)
               HaikuStore.actions.setHaikuIsLoading(false)
            }
         })
         .catch(error => {
            console.log(error)
         })
   )
}
