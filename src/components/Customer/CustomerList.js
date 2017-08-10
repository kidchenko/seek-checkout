import React, { Component } from 'react';

import CustomerListItem from './CustomerListItem';

export default class CustomertList extends Component {

  renderCustomers() {
    return this.props.customers.map((customer, i) =>
        <CustomerListItem key={i} customer={customer} />)
  }

  handleChange() {
    this.props.onSelectCustomer(this.refs.customerList.value);
  }

  render() {
    return (
      <select onChange={this.handleChange.bind(this)} ref="customerList">
      {
        this.renderCustomers()
      }
      </select>
    );
  }
}
