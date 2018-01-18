import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { fakeAuth } from './fakeAuth';

class MembersPrivateRoute extends Component {
    render() {
        return (
            <Route path={this.props.path} render={(props) => (
                fakeAuth.isAuthenticated ? (<this.props.component/>) : 
                (<Redirect to={{pathname: '/members/login', state: {from: this.props.path}}}/>)
            )}/>
        );
    }
}

export default MembersPrivateRoute;