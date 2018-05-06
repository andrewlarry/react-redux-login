import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Login from './components/Login';

// import { AppProvider, AppConsumer } from './AppContext';

const App = (props) => (
  <Router>
    <Switch>
      <Route exact path="/" component={Login} />
    </Switch>
  </Router>
);

export default App;
