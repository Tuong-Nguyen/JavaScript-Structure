import React from 'react';
import { render } from 'react-dom';
import { App } from './components/App-ES6';
import { Whoops404 } from './components/Whoops404';
import { Router, Route, hashHistory } from 'react-router';
import routes from './routes';
import MemberList from './components/ui/MemberList';

window.React = React

render(routes, document.getElementById('react-container'))
// render(
//   <Router history={hashHistory}>
//     <Route path="/" component={App}/>
//     <Route path="list-days" component={App} >
//       <Route path=":filter" component={App} />
//     </Route>
//     <Route path="add-day" component={App} />
//     <Route path="*" component={Whoops404}/>
//   </Router>,
//   document.getElementById('react-container')
// )

// render(
//   <MemberList />,
//   document.getElementById('react-container'))
