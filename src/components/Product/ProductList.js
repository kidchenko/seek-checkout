import './ProductList.css';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ProductListHeader from './ProductListHeader';
import ProductListItem from './ProductListItem';

export default class ProductList extends Component {

  render() {
    return (
      <section aria-labelledby="product-list-title">
        <h1 id="product-list-title">Select your product:</h1>
        <table className="product-list">
          <ProductListHeader />
          <tbody>
          {
            this.renderItems()
          }
          </tbody>
        </table>
      </section>
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
