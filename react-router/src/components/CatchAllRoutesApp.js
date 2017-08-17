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

const Links = () =>
    <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Not define route for this link</Link>
    </nav>

class CatchAllRoutesApp extends React.Component {

    render(){
        const {isSwitch} = this.props;

        return (
            <Router>
                <div>
                    <Links />
                    {isSwitch ?
                        <Switch>
                            <Route exact path="/" render={() => <h1>Home</h1>} />
                            <Route path="/about" render={() => <h1>About</h1>} />
                            <Route render={() => <h1>Page not found</h1>} />
                        </Switch>
                        :
                        <div>
                            <Route exact path="/" render={() => <h1>Home</h1>} />
                            <Route path="/about" render={() => <h1>About</h1>} />
                            <Route render={() => <h1>Page not found</h1>} />
                        </div>
                    }

                </div>
            </Router>
        )
    }
}

export default CatchAllRoutesApp;