import React, {useContext} from 'react';
import {Redirect, Route} from 'react-router-dom';
import {AuthContext} from "../context/auth";

function PrivateRoute({component: Component, ...rest}) {
    const {user} = useContext(AuthContext);
    console.log(user);
    return (
        <Route
            {...rest}
            render={props =>
                user!=null ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/login"/>
                )
            }
        />
    );
}

export default PrivateRoute;
