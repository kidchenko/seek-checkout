import React, { Component } from 'react';
import fakeAuth from './FakeAuth';
import { Redirect } from 'react-router-dom'

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
]

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
            customers.map((customer, i) => {
              return <option key={i} value={customer.name}>{customer.name}</option>
            })
          }
          </select>
          <button onClick={this.login.bind(this)}>Login</button>
        </form>
      </div>
    );
  }
}

export default CustomertList;
