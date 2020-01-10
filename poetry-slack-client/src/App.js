import React from 'react'
import 'bulma'
import './assets/styles.scss'
// import stores from './RootStore' // Använd Context för att göra alla stores tillgänglig för komponenterna i appen

import Routes from './routes/Routes'

function App() {
   return (
      <div className="App">
         <Routes></Routes>
      </div>
   )
}

export default App
