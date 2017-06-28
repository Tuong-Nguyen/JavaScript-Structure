import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Home from './components/ui/Home';
import About from './components/ui/About';
import MemberList from './components/ui/MemberList';
import  { A1, A2, A3, Left, Right, Whoops404  } from './components';

const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Home} />
        <Route path="/" component={Left}>
          <Route path="about" component={About}>
            <IndexRoute component={About}/>
            <Route path=":filter" component={A1}>
              <Route path="item" component={A2}>
                <Route path=":order" component={A3}/>
              </Route>
            </Route>
          </Route>
          <Route path="members/:filter" component={MemberList} />
        </Route>
        {/*<Route path="*" component={Whoops404} />*/}
    </Router>
);

export default routes;
