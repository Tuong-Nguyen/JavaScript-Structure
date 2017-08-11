import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloClient} from 'apollo-client';
import {ApolloProvider} from 'react-apollo';
import SongListContainer from "./components/SongListContainer";
import {hashHistory, IndexRoute, Route, Router} from "react-router";
import {App} from "./components/App";
import SongFormContainer from "./components/SongFormContainer";
import SongDetailContainer from "./components/SongDetailContainer";

const apolloClient = new ApolloClient({});


const Root = () => {
    return (
        <ApolloProvider client={apolloClient}>
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={SongListContainer}/>
                    <Route path="song/create" component={SongFormContainer}/>
                    <Route path="song/:id" component={SongDetailContainer}/>
                </Route>
            </Router>
        </ApolloProvider>
    );
};

ReactDOM.render(
    <Root />,
    document.querySelector('#root')
);
