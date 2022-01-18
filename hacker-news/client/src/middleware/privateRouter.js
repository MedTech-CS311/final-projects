import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import authService from 'services/auth.service';

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => {
        const currentUser = authService.getCurrentUser();
        if (!currentUser || currentUser.isExpired) {
            // not logged in so redirect to login page with the return url
            return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        }

        // authorised so return component
        return <Component {...props} />
    }} />
)