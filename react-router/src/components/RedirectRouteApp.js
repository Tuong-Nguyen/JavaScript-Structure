/**
 * Created by nkim on 8/18/2017.
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

const loggedin = true;

const Links = () =>
    <nav>
        <Link to="/">Home</Link>
        <Link to="/old/oldParam">/Old/oldParam</Link>
        <Link to="/new/newParam">/New/newParam</Link>
    </nav>

const RedirectRouteApp = () => (
    <Router>
        <div>
            <Links />
            <Route exact path="/" render={() => (<h1>Home</h1>)} />
            <Route path="/new/:str"
                   render={({match}) => (<h1>New: {match.params.str}</h1>)} />
            <Route path="/old/:str" render={({match}) => (
                <Redirect to={`/new/${match.params.str}`}/>
            )} />
        </div>
    </Router>
)

export default RedirectRouteApp;