import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect,
    Prompt,
    NavLink} from 'react-router-dom';
import './App.css';

// const isActiveFunc = (match, location) => {
//     console.log(match, location)
//     return match;
// }

// const Links = () => (
//     <nav>
//         <NavLink exact activeClassName="active" to="/">Home</NavLink>
//         <NavLink activeStyle={{color: 'green'}} to="/about">About</NavLink>
//         <NavLink activeClassName="active"
//                  isActive={isActiveFunc}
//                  to="/contact">Contact</NavLink>
//     </nav>
// )
//
// const App = () => (
//     <Router>
//         <div>
//             <Links />
//             <Route exact path="/" render={() => <h1>Home</h1>} />
//             <Route exact path="/about" render={() => <h1>About</h1>} />
//             <Route path="/contact" render={() => <h1>Contact</h1>} />
//         </div>
//     </Router>
// );
//////////////////////////////////////////////////////////
// const App = (props) => (
//     <Router>
//         <div>
//             <Route path="/:page?-:subpage?" render={({match}) => (
//                 <h1>
//                     PAGE: {match.params.page || 'Home' }<br />
//                     SUBPAGE: {match.params.subpage}
//                 </h1>
//             )} />
//         </div>
//     </Router>
// )
//////////////////////////////////////////////////////////
// const App = (props) => (
//     <Router>
//         <div>
//             <Route path="/:a(\d{2}-\d{2}-\d{4})/:b(\.[a-z]+)" render={({match}) => (
//                 <h1>
//                     ParamA: {match.params.a}<br />
//                     ParamB: {match.params.b}
//                 </h1>
//             )} />
//         </div>
//     </Router>
// )
//////////////////////////////////////////////////////////

// const Links = () => (
//     <nav>
//         <Link to="/?id=123">Inline</Link>
//         <Link to={{pathname: '/', search: 'id=456'}}>Object</Link>
//     </nav>
// )
//
// const App = (props) => (
//     <Router>
//         <div>
//             <Links />
//             <Route path="/" render={({match, location}) => (
//                 <div>
//                     <p>root</p>
//                     <p>{JSON.stringify(match)}</p>
//                     <p>{JSON.stringify(location)}</p>
//                     <p>{new URLSearchParams(location.search).get('id')}</p>
//                 </div>
//             )} />
//         </div>
//     </Router>
// )
////////////////////////////////////////////////////////////
// const Links = () =>
//     <nav>
//         <Link to="/">Home</Link>
//         <Link to="/about">About</Link>
//         <Link to="/contact">Contact</Link>
//     </nav>
//
// class App extends React.Component {
//     render(){
//         return (
//             <Router>
//                 <div>
//                     <Links />
//                     <Switch>
//                         <Route exact path="/" render={() => <h1>Home</h1>} />
//                         <Route path="/about" render={() => <h1>About</h1>} />
//                         <Route render={() => <h1>Page not found</h1>} />
//                     </Switch>
//                 </div>
//             </Router>
//         )
//     }
// }
///////////////////////////////////////////////////////////////////
// const Links = () =>
//     <nav>
//         <Link to="/">Home</Link>
//         <Link to="/about">About</Link>
//         <Link to="/contact">Contact</Link>
//     </nav>
//
// class App extends React.Component {
//     render(){
//         return (
//             <Router>
//                 <div>
//                     <Links />
//                     <Switch>
//                         <Route exact path="/" render={() => <h1>Home</h1>} />
//                         <Route path="/about" render={() => <h1>About</h1>} />
//                         <Route path="/contact" render={() => <h1>Contact</h1>} />
//                         <Route path="/:itemid" render={({match}) => <h1>Item: {match.params.itemid}</h1>} />
//                     </Switch>
//                 </div>
//             </Router>
//         )
//     }
// }
/////////////////////////////////////////////////////////////////////////
// const Header = ({match}) => (
//     <div className="header">
//         <Route path="/:page"
//                render={({match}) => (
//                    <h1>{match.params.page} header</h1>
//                )} />
//     </div>
// );
//
// const Content = ({match}) => (
//     <div className="content">
//         <Route path="/:page"
//                render={({match}) => (
//                    <h1>{match.params.page} content</h1>
//                )} />
//     </div>
// )
//
// const Links = () =>
//     <nav>
//         <Link to="/home">Home</Link>
//         <Link to="/about">About</Link>
//         <Header />
//         <Content />
//     </nav>
//
// const App = (props) => (
//     <Router>
//         <div>
//             <Links />
//         </div>
//     </Router>
// )
/////////////////////////////////////////////////////////////
// const Home = () => (<h1>Home</h1>)
// const Menu = () => (
//     <div>
//         <h1>Menu</h1>
//         <Link to="/menu/food">Food</Link>
//         <Link to="/menu/drink">Drinks</Link>
//         <Link to="/menu/sides">Sides</Link>
//         <Route path="/menu/:section"
//                render={({match}) => <h2>{match.params.section}</h2>} />
//     </div>
// )
//
// const App = (props) => (
//     <Router>
//         <div>
//             <Link to="/">Home</Link>
//             <Link to="/menu">Menu</Link>
//             <Route exact path="/" component={Home} />
//             <Route path="/menu" component={Menu} />
//         </div>
//     </Router>
// )
//////////////////////////////////////////////////////////////
// const loggedin = true;
//
// const Links = () =>
//     <nav>
//         <Link to="/">Home</Link>
//         <Link to="/old/123">Old</Link>
//         <Link to="/new/456">New</Link>
//         <Link to="/protected">Protected</Link>
//     </nav>
// const App = () => (
//     <Router>
//         <div>
//             <Links />
//             <Route exact path="/" render={() => (<h1>Home</h1>)} />
//             <Route path="/new/:str"
//                    render={({match}) => (<h1>New: {match.params.str}</h1>)} />
//             <Route path="/old/:str" render={({match}) => (
//                 <Redirect to={`/new/${match.params.str}`}/>
//             )} />
//             <Route path="/protected" render={({match}) => (
//                 loggedin
//                     ? <h1>Welcome to the protected page</h1>
//                     : <Redirect to="/new/Login"/>
//             )} />
//         </div>
//     </Router>
// )
//////////////////////////////////////////////////////////////////
const Home = () => (<h1>Home</h1>)
class Form extends React.Component {
    state = {dirty: false}
    setDirty = () => this.setState({dirty: true})
    render(){
        return (
            <div>
                <h1>Form</h1>
                <input type="text" onInput={this.setDirty}/>
                <Prompt
                    when={this.state.dirty}
                    message="Data will be lost"
                />
            </div>
        )
    }
}
const App = () => (
    <Router>
        <div>
            <Link to="/">Home</Link>
            <Link to="/form">Form</Link>
            <Route exact path="/" component={Home} />
            <Route path="/form" component={Form} />
        </div>
    </Router>
)
export default App