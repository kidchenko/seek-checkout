import React, { Component } from 'react';
import fakeAuth from '../Header/FakeAuth';
import { Redirect } from 'react-router-dom'

import CustomerListItem from './CustomerListItem';

const customers = [
  {
    name: 'UNILEVER'
  },
  {
    name: 'APPLE'
  },
  {
    name: 'NIKE'
  },
  {
    name: 'FORD'
  },
  {
    name: 'MICROSOFT'
  },
  {
    name: 'TESLA'
  },
  {
    name: 'SPACEX'
  },
];

class CustomertList extends Component {

  state = {
    redirectToReferrer: false
  }

  login = (e) => {
    e.preventDefault();
    console.log('login');
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true })
    })
  }

  renderCustomers() {
    return customers.map((customer, i) => {
      return <CustomerListItem key={i} customer={customer} />
    })
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/ads' } }
    const { redirectToReferrer } = this.state

    if (redirectToReferrer) {
      return (
        <Redirect to={from}/>
      )
    }

    return (
      <div>
        <h1>Hello recruiter, please do your login</h1>
        <form>
          <select>
          {
            this.renderCustomers()
          }
          </select>
          <button onClick={this.login.bind(this)}>Login</button>
        </form>
      </div>
    );
  }
}

export default CustomertList;
