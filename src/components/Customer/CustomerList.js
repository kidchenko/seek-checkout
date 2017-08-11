import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
      <select id="customer-list" onChange={this.handleChange.bind(this)} ref="customerList">
      {
        this.renderCustomers()
      }
      </select>
    );
  }
}

CustomertList.propTypes = {
  customers: PropTypes.array,
  onSelectCustomer: PropTypes.func
}
