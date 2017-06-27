/**
 * Created by lnthao on 6/23/2017.
 */
import React from 'react';
import { render } from 'react-dom';
import {App} from './components/App';
import {Whoops404} from './components/Whoops404';
import {Router, Route, hashHistory} from 'react-router';

window.React = React;

// render(<SkiDayCount />
//   , document.getElementById('root'));

// render(<SkiDayList days={
//     [
//       {
//         resort: "SquaW Valley",
//         date: new Date('6/1/2017'),
//         powder: true,
//         backcountry: false
//       },
//       {
//         resort: "Kirkwood",
//         date: new Date('6/15/2017'),
//         powder: false,
//         backcountry: false
//       },
//       {
//         resort: "Mt. Tallac",
//         date: new Date('6/26/2017'),
//         powder: false,
//         backcountry: true
//       }
//     ]
//   } />
//   , document.getElementById('root'));
render(
  <Router history={hashHistory}>
    <Route path="/" component={App} />
    <Route path="list-days" component={App} />
    <Route path="add-day" component={App} />
    <Route path="*" component={Whoops404} />
  </Router>, document.getElementById('root'));
