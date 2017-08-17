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

const location = "{{pathname: '/', search: 'id=456&name=def'}}";

const Links = () => (
    <nav>
        <Link to="/?id=123&name=abc">to='/?id=123&name=abc'</Link>
        <Link to={{pathname: '/', search: 'id=456&name=def'}}>to={location}</Link>
    </nav>
)

const QueryParametersApp = (props) => (
    <Router>
        <div>
            <Links />
            <Route path="/" render={({match, location}) => (
                <div>
                    <p>{JSON.stringify(match)}</p>
                    <p>{JSON.stringify(location)}</p>
                    <p>{new URLSearchParams(location.search).get('id')}</p>
                    <p>{new URLSearchParams(location.search).get('name')}</p>
                </div>
            )} />
        </div>
    </Router>
)

export default QueryParametersApp;