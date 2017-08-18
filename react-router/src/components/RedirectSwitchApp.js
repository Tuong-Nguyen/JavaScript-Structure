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

const Links = () =>
    <nav>
        <Link to="/">Home</Link>
        <Link to="/old">/old : this link is not defined route</Link>
        <Link to="/new">New</Link>
        <Link to="/abc">/abc: this link is not defined route</Link>
    </nav>

const RedirectSwitchApp = () => (
    <Router>
        <div>
            <Links />
            <Switch>
                <Route exact path="/" render={() => (<h1>Home</h1>)} />
                <Route path="/new" render={() => (<h1>New</h1>)} />
                <Redirect from="/old"  to="/new" />
            </Switch>
        </div>
    </Router>
)

export default RedirectSwitchApp;