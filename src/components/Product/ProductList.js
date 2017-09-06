import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import ProductListHeader from "./ProductListHeader";
import ProductListItem from "./ProductListItem";

const TableResponsive = styled.div`
  display: block;
  width: 100%;
  overflow-x: auto;
`;

const ProductTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  border-spacing: 0;
  empty-cells: show;
  border: 1px solid #cbcbcb;
  box-sizing: border-box;

  > thead {
    background-color: #e0e0e0;
    color: #000;
    text-align: left;
    vertical-align: bottom;
    box-sizing: border-box;
  }

  > tr {
    box-sizing: border-box;
    width: 100%;
  }

  > td,
  > th {
    border-left: 1px solid #cbcbcb; /*  inner column border */
    border-width: 0 0 0 1px;
    font-size: inherit;
    margin: 0;
    overflow: visible;
    padding: 0.3em 0.3em;
    border-bottom: 1px solid #cbcbcb;
    box-sizing: border-box;
  }

  > td:first-child,
  > th:first-child {
    border-left-width: 0;
  }
  > tbody > tr:last-child > td {
    border-bottom-width: 0;
  }
`;

export default class ProductList extends Component {
  render() {
    return (
      <section aria-labelledby="product-list-title">
        <h1 id="product-list-title">Select your product:</h1>
        <TableResponsive>
          <ProductTable>
            <ProductListHeader />
            <tbody>{this.renderItems()}</tbody>
          </ProductTable>
        </TableResponsive>
      </section>
    );
  }

  renderItems() {
    return this.props.products.map((product, index) => (
      <ProductListItem
        key={index}
        product={product}
        onAddToCart={this.props.onAddToCart.bind(this)}
      />
    ));
  }
}

ProductList.propTypes = {
  products: PropTypes.array,
  onAddToCart: PropTypes.func
};
