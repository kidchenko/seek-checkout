import React, { Component } from 'react';

import CustomertList from './CustomerList';

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

class SelectCustomerForm extends Component {

  render() {

    return (
      <div>
        <h1>Hello recruiter, please do your login</h1>
        <form>
          <CustomertList customers={customers} />
          <button onClick={console.log('click')}>Login</button>
        </form>
      </div>
    );
  }
}

export default SelectCustomerForm;
