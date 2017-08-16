import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import './styles/main.scss';
import store from './store/configureStore';
import App from './app/App';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('.container')
);