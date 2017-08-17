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

const Links = () => (
    <nav>
        <Link to="/">/</Link>
        <Link to="/17-08-2017/.html">/17-08-2017/.html</Link>
        <Link to="/1-1-2017/.html">/1-1-2017/.html</Link>
    </nav>
)

const regexPath = "/:a(\d{2}-\d\{2}-\d{4})/:b(\.[a-z]+)"

const RegexRouteApp = (props) => (
    <Router>
        <div>
            <Links />
            <h2>Route path: {regexPath}</h2>
            <Route path="/:a(\d{2}-\d{2}-\d{4})/:b(\.[a-z]+)" render={({match}) => (
                <h1>
                    ParamA: {match.params.a}<br />
                    ParamB: {match.params.b}<br />
                </h1>
            )} />
        </div>
    </Router>
)

export default RegexRouteApp;