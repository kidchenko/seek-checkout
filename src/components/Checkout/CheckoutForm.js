import React, { Component } from 'react';

import CheckoutItemGroup from './CheckoutItemGroup';

export default class CustomerSelector extends Component {

  render() {
    return (
      <div>
        <h4>Itens in cart:</h4>
        <CheckoutItemGroup
            itens={this.props.itens}
            groupBy="id" />
        <p>Total: USD {this.props.total}</p>
        <button onClick={() => console.log("pay")}>
          Pay now
        </button>
      </div>
    );
  }
}
