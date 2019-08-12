import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import mainpage from './MainPage'
import Header from './Header';

function App() {

  return (
    <>
    {/* <Header/> */}
    <Router>
      <Switch>
        <Route path="/" component={mainpage} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
