/**
 * Created by lnthao on 6/23/2017.
 */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import {loadCoursesAPI} from './actions/courseActions';
import {loadAuthorsAPI} from './actions/authorActions';
import './styles/styles.css';
import '../node_modules/jquery/dist/jquery.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/js/tooltip.js';
import '../node_modules/bootstrap/js/popover.js';
import './bootstrap/bootstrap-confirmation.min.js';
import '../node_modules/toastr/build/toastr.min.css';


const store = configureStore();
store.dispatch(loadCoursesAPI());
store.dispatch(loadAuthorsAPI());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
