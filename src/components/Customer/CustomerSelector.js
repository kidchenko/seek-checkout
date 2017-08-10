import React, { Component } from 'react';

import CustomertList from './CustomerList';

export default class CustomerSelector extends Component {

  render() {
    return (
      <div>
        <h1>Hello recruiter! Select the customer:</h1>
        <CustomertList
            customers={this.props.customers}
            onSelectCustomer={this.props.onSelectCustomer.bind(this)} />
      </div>
    );
  }
}
