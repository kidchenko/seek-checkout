import React, { Component } from 'react';

import CustomerListItem from './CustomerListItem';

class CustomertList extends Component {

  renderCustomers() {
    return this.props.customers.map((customer, i) => {
      return <CustomerListItem key={i} customer={customer} />
    })
  }

  render() {
    return (
      <select>
      {
        this.renderCustomers()
      }
      </select>
    );
  }
}

export default CustomertList;
