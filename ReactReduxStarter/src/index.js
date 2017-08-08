import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './shots/reducers';
import { loadShots } from './shots/actions/shotsActions';
import App from './shots/components/App';

let store = createStore(rootReducer, applyMiddleware(thunk));
store.dispatch(loadShots());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('.container')
);