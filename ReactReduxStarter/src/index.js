import React from 'react';
import { render } from 'react-dom';
import { App } from './components/SkiDayApp/App-ES6';
import { Whoops404 } from './components/SkiDayApp/Whoops404';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import MemberList from './components/ui/MemberList';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();

window.React = React

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.getElementById('app'))
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


