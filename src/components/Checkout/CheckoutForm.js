import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CheckoutItemGroup from './CheckoutItemGroup';

export default class CheckoutForm extends Component {

  render() {
    return (
      <section aria-labelledby="checkout-title">
        <h1 id="checkout-title">Itens in cart:</h1>
        <CheckoutItemGroup
            itens={this.props.itens}
            groupBy="id" />
        <p>Total: USD {this.props.total}</p>
        <button className="button" onClick={this.props.onCheckout.bind(this)}>
          Pay now
        </button>
      </section>
    );
  }
}

CheckoutForm.propTypes = {
  itens: PropTypes.array,
  total: PropTypes.number,
  onCheckout: PropTypes.func
}
