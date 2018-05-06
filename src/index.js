import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './state/store'
import App from './components/App';

render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
);