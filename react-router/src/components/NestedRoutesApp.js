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

const Home = () => (<h1>Home</h1>)
const Menu = (props) => {
    console.log(props);
    return (
        <div>
            <h1>Children: {props.children}</h1>
            <h1>Menu</h1>
            <Link to="/menu/food">Food</Link>
            <Link to="/menu/drink">Drinks</Link>
            <Link to="/menu/sides">Sides</Link>
            <Route path="/:section"
                   render={({match}) => <h2>aaaaaa{match.params.section}</h2>}/>
        </div>)

}

const Item = () => (
    <h1>Children Item</h1>
)

const NestedRoutesApp = (props) => (
    <Router>
        <div>
            <Link to="/">Home</Link>
            <Link to="/abc">/abc</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/menu/abc">/menu/abc</Link>
            <Route exact path="/" component={Home} />
            <Route path="/menu" component={Menu}>
                <Route path="/abc" component={Item} />
            </Route>
        </div>
    </Router>
)

export default NestedRoutesApp