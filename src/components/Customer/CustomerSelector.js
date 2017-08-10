import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

CustomerSelector.propTypes = {
  customers: PropTypes.array,
  onSelectCustomer: PropTypes.func
};
