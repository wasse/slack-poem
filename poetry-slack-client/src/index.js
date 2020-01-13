import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter } from 'react-router-dom'

// Imports icons from fontawesome. Example of usage in app:
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// <FontAwesomeIcon icon="angle-down" />
// More Icons here https://fontawesome.com/icons?d=listing&m=free
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fab, fas)

ReactDOM.render(
   <BrowserRouter>
      <App />
   </BrowserRouter>,

   document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
