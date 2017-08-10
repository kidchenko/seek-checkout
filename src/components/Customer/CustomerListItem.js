import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CustomerListItem extends Component {

  render() {
    return (
      <option value={this.props.customer.name}>{this.props.customer.name}</option>
    )
  }
}

CustomerListItem.propTypes = {
  customer: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired
};
