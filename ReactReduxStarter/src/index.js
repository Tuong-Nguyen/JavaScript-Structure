import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
// import configureStore from './store/configureStore.dev';
// import { Provider}  from 'react-redux';
import { Router, Route, browserHistory, hashHistory } from 'react-router';
// import routes from './routes';
// import { loadCourses } from './actions/courseActions';
// import { loadPractices } from './actions/practiceActions';
// import { loadAuthors } from './actions/authorActions';
import './stylesheets/styles.css';
import '../node_modules/jquery/dist/jquery.js';
import {App} from './components/App';
import { Whoops404 } from './components/Whoops404';

window.React = React;

// const store = configureStore();
// store.dispatch(loadCourses());
// store.dispatch(loadPractices());
// store.dispatch(loadAuthors);

render(
  <Router history={hashHistory}>
    <Route path="/" component={App} />
    <Route path="list-days" component={App}>
      <Route path=":filter" component={App}/>
    </Route>
    <Route path="add-day" component={App} />
    <Route path="*" component={Whoops404} />
  </Router>, document.getElementById('root'));
