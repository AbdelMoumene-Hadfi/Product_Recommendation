import React from 'react';
import {BrowserRouter as Router ,  Route } from 'react-router-dom';
import Index from './Components/index';
import Dashboard from './Components/Dashboard';


function App() {
  return (
    <Router>
        <div>
          <Route exact path="/" component={Index} />
          <Route exact path="/Dashboard" component={Dashboard} />
        </div>
      </Router>
  );
}
export default App;
