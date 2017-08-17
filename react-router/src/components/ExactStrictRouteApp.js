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

const Home = ({match}) => {
    console.log('Home');
    console.log(match);
    return (
        <div>
            <h1>Home</h1>
            <h2>HomePath: '{match.path}'</h2>
        </div>)

}
const About = ({match}) => {
    console.log('About');
    console.log(match);
    return (
        <div>
            <h1>About</h1>
            <h2>AboutPath: '{match.path}'</h2>
        </div>)
}
const Contact = ({match}) => {
    console.log('Contact');
    console.log(match);
    return (
        <div>
            <h1>Contact</h1>
            <h2>ContactPath: '{match.path}'</h2>
        </div>)
}


const Links = () => (

<div>
    <nav>
        <Link to="/">/</Link>
        <Link to="/about">/about</Link>
        <Link to="/contact">/contact</Link>
    </nav>
    <br />
    <nav>
        <Link to="/abc">/abc</Link>
    </nav>
    <br />
    <nav>
        <Link to="/about/">/about/</Link>
        <Link to="/about/abc">/about/abc</Link>
    </nav>
    <br />
    <nav>
        <Link to="/contact/">/contact/</Link>
        <Link to="/contact/abc">/contact/abc</Link>
    </nav>
    <hr/>
</div>

)

const ExactStrictRouteApp = ({exactHome, exactAbout, strictAbout, exactContact, strictContact}) => (
    <Router>
        <div>
            <Links />
            <Route exact={exactHome} path="/" component={Home} />
            <Route exact={exactAbout}strict={strictAbout} path="/about" component={About} />
            <Route exact={exactContact} strict={strictContact} path="/contact/" component={Contact} />

        </div>
    </Router>
)


// ExactStrictRouteApp.defaultProps = {
//     exactHome: false,
//     exactAbout: false,
//     strictAbout: false,
//     exactContact: false,
//     strictContact: false,
//
// };

export default ExactStrictRouteApp
