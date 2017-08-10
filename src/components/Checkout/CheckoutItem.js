import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CheckoutItem extends Component {

  render() {
    return (
      <li>{this.props.id} - {this.props.quantity} - {this.props.name}</li>
    );
  }
}

CheckoutItem.propTypes = {
  id: PropTypes.string,
  quantity: PropTypes.number,
  name: PropTypes.string
}
