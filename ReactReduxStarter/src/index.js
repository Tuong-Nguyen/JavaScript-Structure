import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider}  from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { loadCourses } from './actions/courseActions';
import { loadPractices } from './actions/practiceActions';
import { loadAuthors } from './actions/authorActions';
import './stylesheets/styles.css';
import '../node_modules/jquery/dist/jquery.js';

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadPractices());
store.dispatch(loadAuthors);

render(
  <Provider store={store}>
   <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
