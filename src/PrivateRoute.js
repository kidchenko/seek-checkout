import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import fakeAuth from './components/Header/FakeAuth';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={ props => (
    fakeAuth.isAuthenticated ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }}/>
    )
  )}/>
);

export default PrivateRoute;
