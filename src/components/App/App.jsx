import React, { Component } from 'react';
import AppContainer from './AppContainer.jsx';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Login from '../Login';

// import { AppProvider, AppConsumer } from './AppContext';

const App = (props) => (
  <AppContainer>
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
      </Switch>
    </Router>
  </AppContainer>
);

export default App;
