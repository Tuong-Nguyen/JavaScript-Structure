import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';
import { loadShots } from './actions';

let store = createStore(
  reducers,
  applyMiddleware(thunkMiddleware)
);

store.dispatch(loadShots());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('.container')
);