import SessionStore from '../stores/SessionStore'
import HaikuStore from '../stores/HaikuStore'

export const fetchGeneratedHaiku = text => {
   // const ServerURI = 'http://localhost:8080/api/haiku'
   const ServerURI = process.env.REACT_APP_API_HAIKUPOST
   fetch(ServerURI, {
      body: JSON.stringify({ text: text }),
      headers: {
         'Content-Type': 'application/json',
      },
      method: 'POST',
   })
      .then(response => response.json())
      .then(result => {
         if (result.haiku) {
            HaikuStore.actions.setHaiku(result.haiku)
            HaikuStore.actions.setError(false)
         } else {
            HaikuStore.actions.setHaiku(result.errorHaiku)
            HaikuStore.actions.setErrorMessage(result.message)
            HaikuStore.actions.setTitle('ERROR')
            HaikuStore.actions.setError(true)
         }
      })
      .catch(error => {
         console.log(error)
      })
}
