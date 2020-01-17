import SessionStore from '../stores/SessionStore'
import HaikuStore from '../stores/HaikuStore'

export const fetchGeneratedHaiku = text => {
   const ServerURI = 'http://localhost:8080/api/haiku'
   fetch(ServerURI, {
      body: '{"text": ' + text + '}',
      method: 'POST',
   })
      .then(response => response.json())
      .then(result => {
         console.log(result)
         console.log(result.haiku[0])
         HaikuStore.actions.setPoem(result.haiku[0])
      })
      .catch(error => {
         console.log(error)
         console.log(error.message)
         HaikuStore.actions.setErrorHaiku(error.haiku[0])
         return error.message
      })
}

// 
// function handleErrors(response) {
//     if (!response.ok) {
//         throw Error(response.statusText);
//     }
//     return response;
// }
// fetch("http://httpstat.us/500")
//     .then(handleErrors)
//     .then(response => console.log("ok") )
//     .catch(error => console.log(error) );
{
//   "errorHaiku": [
//     "ERRORHAIKU!",
//     "First row 5 syllables",
//     "Second row 7 syllables",
//     "Third row 5 syllables"
//   ],
//   "localizedMessage": "Not enough words exists to generate a haiku from",
//   "message": "Not enough words exists to generate a haiku from",
//   "stackTrace": [
//     {
//       "className": "com.poetryslack.api.rest.HaikuResource",
//       "fileName": "HaikuResource.java",
//       "lineNumber": 38,
//       "methodName": "createHaiku",
//       "nativeMethod": false
//     },
//     {
//       "className": "jdk.internal.reflect.GeneratedMethodAccessor85",
//       "lineNumber": -1,
//       "methodName": "invoke",
//       "nativeMethod": false
//     },
//     {
