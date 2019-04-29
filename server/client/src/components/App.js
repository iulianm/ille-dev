import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Profile from './Profile';
import Dashboard from './Dashboard';
import ParagraphNew from './grammar/inputContent/ParagraphNew';

class App extends Component {

    componentWillMount() {
        this.props.fetchUser();
    }

    render() {

        if (this.props.auth !== undefined && this.props.auth !== null) {

            const PrivateRoute = ({ component: Component, ...rest }) => (
                <Route {...rest}
                    render={props => (
                        this.props.auth
                            ? <Component {...props} />
                            : <Redirect to={{
                                pathname: '/',
                                state: { from: props.location }
                            }} />
                    )}
                />
            );

            return (
                <BrowserRouter>
                    <div className="container">
                        <Header />
                        <Route exact path='/' component={Landing} />
                        <PrivateRoute path='/profile' component={Profile} />
                        <PrivateRoute path='/dashboard' component={Dashboard} />
                        <PrivateRoute path='/paragraph/new' component={ParagraphNew} />
                    </div>
                </BrowserRouter >
            );
        }
        else {
            return (
                <div></div>
            )
        }
    };
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default (connect(mapStateToProps, actions)(App));