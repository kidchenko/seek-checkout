import React, { Component } from 'react';

export default class CheckoutItem extends Component {

  render() {
    return (
      <li>{this.props.id} - {this.props.quantity} - {this.props.name}</li>
    );
  }
}
