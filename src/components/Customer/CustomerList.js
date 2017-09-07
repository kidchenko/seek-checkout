import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import CustomerListItem from "./CustomerListItem";

const Select = styled.select`
  padding: 0.5em 0.6em;
  display: inline-block;
  border: 1px solid #ccc;
  box-shadow: inset 0 1px 3px #ddd;
  border-radius: 4px;
  vertical-align: middle;
  box-sizing: border-box;
  outline: 0;
  border-color: #129fea;
  height: 2.25em;
  border: 1px solid #ccc;
  background-color: #fff;
`;

export default class CustomertList extends Component {
  renderCustomers() {
    return this.props.customers.map((customer, i) => (
      <CustomerListItem key={i} customer={customer} />
    ));
  }

  handleChange() {
    this.props.onSelectCustomer(this.refs.customerList.value);
  }

  render() {
    return (
      <Select
        id="customer-list"
        onChange={this.handleChange.bind(this)}
        ref="customerList"
        {...this.props}
      >
        {this.renderCustomers()}
      </Select>
    );
  }
}

CustomertList.propTypes = {
  customers: PropTypes.array,
  onSelectCustomer: PropTypes.func
};
