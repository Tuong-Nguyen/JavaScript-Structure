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

const Home = () => <h1>Home</h1>
const About = () => <h1>About</h1>
const Contact = () => <h1>Contact</h1>


const Links = () => (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
    </nav>
)

const ExactStrictRouteApp = (exact, strict) => (
    <Router>
        <div>
            <Links />
            <Route exact={exact} path="/" component={Home} />
            <Route strict={strict} path="/about" component={About} />
            <Route exact={exact} strict={strict} path="/contact" component={Contact} />
        </div>
    </Router>
)
