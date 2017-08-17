/**
 * Created by nkim on 8/16/2017.
 */
import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect,
    Prompt,
    NavLink} from 'react-router-dom';
import '../App.css';
import PropTypes from 'prop-types';


const Home = () => <h1>Home</h1>

const Links = () => (
    <nav>
        <Link to="/">Home</Link>
        <Link to={{pathname: '/about'}}>About</Link>
        <Link replace to="/contact">Contact</Link>
        <Link to="/content">Content</Link>
    </nav>
)

const BasicRoutesApp = () => (
    <Router>
        <div>
            <Links />
            <Route exact path="/" component={Home} />
            <Route path="/about" render={() => <h1>About</h1>} />
            <Route path="/contact" render={() => <h1>Contact</h1>} />
            <Route path="/content" children={() => <h1>Content</h1>} />
        </div>
    </Router>
)

export default BasicRoutesApp;
