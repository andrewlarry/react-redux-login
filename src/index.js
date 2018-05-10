import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './state/store'
import App from './components/App';

import './styles.css';
// Overwrites the window.fetch method so that fetch calls are routed 
// to local storage.
import { configureFakeBackend } from '../utils';
configureFakeBackend();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);