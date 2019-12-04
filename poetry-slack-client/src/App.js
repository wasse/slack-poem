import React from 'react';
import './App.css';
import 'bulma';
import './assets/styles.scss';

import Routes from './routes/Routes'
import BasePageRoutes from './routes/BasePageRoutes'

function App() {
  return (
    <div className="App">
      <Routes></Routes>
    </div>
    );
}

export default App;
