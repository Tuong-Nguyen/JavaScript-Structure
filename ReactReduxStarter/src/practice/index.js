/**
 * Created by nctuong on 7/11/2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';

import App from "./component/app";
import {Whoops404} from "./component/Whoops404";

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="list-days" component={App}>
      <Route path=":filter" component={App}/>
    </Route>
    <Route path="add-day" component={App}/>
    <Route path="*" component={Whoops404}/>
  </Router>,
  document.getElementById('root'));
