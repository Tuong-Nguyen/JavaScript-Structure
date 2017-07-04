import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Home from './components/ui/Home';
import About from './components/ui/About';
import MemberList from './components/ui/MemberList';
import  { Left, Right, Whoops404  } from './components/SkiDayApp/index';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';


// const routes = (
//     <Router history={hashHistory}>
//         <Route path="/" component={Home} />
//         <Route path="/" component={Left}>
//           <Route path="about" component={About}/>
//           <Route path="members" component={MemberList} />
//         </Route>
//         <Route path="*" component={Whoops404} />
//     </Router>
// );

export default (
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="courses" component={CoursesPage} />
      <Route path="about" component={AboutPage} />
    </Route>
);

