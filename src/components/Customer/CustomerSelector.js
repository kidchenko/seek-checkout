import './CustomerSelector.css';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CustomertList from './CustomerList';

export default class CustomerSelector extends Component {

  render() {
    return (
      <section aria-labelledby="customer-selector-title">
        <h1 id="customer-selector-title">Hello recruiter! Select the customer:</h1>
        <CustomertList
            customers={this.props.customers}
            onSelectCustomer={this.props.onSelectCustomer.bind(this)} />
      </section>
    );
  }
}

CustomerSelector.propTypes = {
  customers: PropTypes.array,
  onSelectCustomer: PropTypes.func
};
