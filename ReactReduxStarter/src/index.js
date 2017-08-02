/**
 * Created by lnthao on 6/23/2017.
 */
import React from 'react';
import { render } from 'react-dom';
import { App } from "./components/App";
import { Router, Route, hashHistory } from 'react-router';
import { Whoops404 } from "./components/Whoops404";
// import { SkiDayList } from "./components/SkiDayList";
// import {SkiDayCount} from "./components/SkiDayCount";
// import routes from './routes';
// import {Member} from "./components/ui/Member";
// import MemberList from "./components/ui/MemberList";

window.React = React;

render(
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="list-days" component={App}>
      <Route path=":filter" component={App}/>
    </Route>
    <Route path="add-day" component={App} />
    <Route path="*" component={Whoops404}/>
  </Router>,
  //<MemberList/>,
  document.getElementById('root')
);
