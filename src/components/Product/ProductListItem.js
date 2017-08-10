import React, { Component } from 'react';

export default class ProductListItem extends Component {

  render() {
    return (
      <tr>
        <td>{this.props.product.id}</td>
        <td>{this.props.product.name}</td>
        <td>{this.props.product.description}</td>
        <td>{this.props.product.price}</td>
        <td>
          <button onClick={this.props.onAddToCart.bind(this, this.props.product)}>Add to cart</button>
        </td>
      </tr>
    )
  }
}
