import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom'

import AdsList from './components/AdsList';
import CustomerList from './components/CustomerList';
import fakeAuth from './components/FakeAuth';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <AuthButton />
          <ul>
            <li><Link to="/">Customer List</Link></li>
            <li><Link to="/ads">Ads List</Link></li>
          </ul>

          <hr/>

          <Route exact path="/" component={CustomerList}/>
          <PrivateRoute path="/ads" component={AdsList}/>
        </div>
      </Router>
    );
  }
}

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
)

const AuthButton = withRouter(({ history }) => (
  fakeAuth.isAuthenticated ? (
    <p>
      Welcome! <button onClick={() => {
        fakeAuth.signout(() => history.push('/'))
      }}>Sign out</button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  )
))

export default App;
