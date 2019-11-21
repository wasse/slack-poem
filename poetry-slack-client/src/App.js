import React from 'react';
import './App.css';
import 'bulma';
import './assets/styles.scss';

import Routes from './routes/Routes'
import { Sidemenu } from './components/Sidemenu';

function App() {
  return (
    <div className="App">

      <div className="hero is-dark">
       <div className="container is-centered">
          <div className="hero-body">
            <h1 className="title is-bold">
              Poetry-Slack
            </h1>
            <h2 className="subtitle">
              Coming soon!
            </h2>
          </div>
        </div>
      </div>
      <Sidemenu></Sidemenu>
      <Routes></Routes>
    </div>
  );
}

export default App;
