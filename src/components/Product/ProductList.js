import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ProductListHeader from './ProductListHeader';
import ProductListItem from './ProductListItem';

export default class ProductList extends Component {

  render() {
    return (
      <table>
        <ProductListHeader />
        <tbody>
        {
          this.renderItems()
        }
        </tbody>
      </table>
    );
  }

  renderItems() {
    return this.props.products.map((product, index) =>
        <ProductListItem
            key={index}
            product={product}
            onAddToCart={this.props.onAddToCart.bind(this)} />
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.array,
  onAddToCart: PropTypes.func
}
