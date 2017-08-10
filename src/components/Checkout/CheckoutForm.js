import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CheckoutItemGroup from './CheckoutItemGroup';

export default class CheckoutForm extends Component {

  render() {
    return (
      <div>
        <h4>Itens in cart:</h4>
        <CheckoutItemGroup
            itens={this.props.itens}
            groupBy="id" />
        <p>Total: USD {this.props.total}</p>
        <button onClick={this.props.onCheckout.bind(this)}>
          Pay now
        </button>
      </div>
    );
  }
}

CheckoutForm.propTypes = {
  itens: PropTypes.array,
  total: PropTypes.number,
  onCheckout: PropTypes.func
}
