import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const RutasPrivadas = ({ component: Component, ...rest }) => {
    const isAuthenticated = () => {
        const token = localStorage.getItem('token');
        return token !== null;
    };

    return (
        <Route
            {...rest}
            render={props =>
                isAuthenticated() ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/login" />
                )
            }
        />
    );
};

export default RutasPrivadas;