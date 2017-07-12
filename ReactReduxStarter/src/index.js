/**
 * Created by lnthao on 6/23/2017.
 */
import React from 'react';
import { render } from 'react-dom';
import { SkiDayCount } from './components/SkiDayCount';
import Hello from './Hello';
import * as abc from './lib/JsonTitle';
import {UserList} from "./components/UserList_State";
import {Router, Route, hashHistory} from 'react-router';
import {Menu} from './components/menu';
import {App, PageNotFound} from './components/App';
import configStore from './stores/configStore';
import {Provider} from 'react-redux';

const store = configStore();
window.React = React;
render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path={"/"} component={App} />
      <Route path={"userlist"} component={App} />
      <Route path={"members"} component={App} />
      <Route path={"adduser"} component={App} />
      <Route path={"skidaycount"} component={App} />
      <Route path={"*"} component={PageNotFound} />
    </Router>
  </Provider>
  , document.getElementById('root'));

