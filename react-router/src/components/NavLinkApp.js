/**
 * Created by nkim on 8/17/2017.
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

const isActiveFunc = (match, location) => {
    console.log(match, location)
    return match;
}

const Links = ({activeContactFunc}) => (
    <nav>
        <NavLink exact activeClassName="active" to="/">Home</NavLink>
        <NavLink activeStyle={{color: 'green'}} to="/about">About</NavLink>
        <NavLink activeClassName="gold"
                 isActive={activeContactFunc}
                 to="/contact">Contact</NavLink>
    </nav>
)

const NavLinkApp = ({activeContactFunc}) => (
    <Router>
        <div>
            <Links activeContactFunc={activeContactFunc} />
            <Route exact path="/" render={() => <h1>Home</h1>} />
            <Route path="/about" render={() => <h1>About</h1>} />
            <Route path="/contact" render={() => <h1>Contact</h1>} />
        </div>
    </Router>
);

export default NavLinkApp;