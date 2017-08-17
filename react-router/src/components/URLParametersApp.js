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
        <Link to="/123">/123</Link>
        <Link to="/123/456">/123/456</Link>
    </nav>
)

const URLPrametersApp = ({optional}) => (
    <Router>
        <div>
            <Links />
            {optional ?
                <Route path="/:page?/:subpage?" render={({match}) => (
                    <h1>
                        PAGE: {match.params.page || 'Home' }<br />
                        SUBPAGE: {match.params.subpage}<br />
                        Route path: '{match.path}'
                    </h1>
                )} />
                :
                <Route path="/:page/:subpage" render={({match}) => (
                    <h1>
                        PAGE: {match.params.page || 'Home' }<br />
                        SUBPAGE: {match.params.subpage}<br />
                        Route path: '{match.path}'
                    </h1>
                )} />
            }
        </div>
    </Router>
)

export default URLPrametersApp;