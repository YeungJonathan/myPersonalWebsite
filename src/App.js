import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import mainpage from './MainPage'

function App() {

  return (
    // <>
    <Router>
      <Switch>
        <Route path="/" component={mainpage} />
      </Switch>
    </Router>
  );
}

export default App;
