import React, { Component } from "react";
import PropTypes from "prop-types";
import _ from "lodash";

import CheckoutItem from "./CheckoutItem";

export default class CheckoutItemGroup extends Component {
  renderGroupedItens() {
    const grouped = _.groupBy(this.props.itens, this.props.groupBy);
    return _.map(grouped, (value, key) => (
      <CheckoutItem key={key} quantity={value.length} {...value[0]} />
    ));
  }

  render() {
    return <ul>{this.renderGroupedItens()}</ul>;
  }
}

CheckoutItemGroup.propTypes = {
  itens: PropTypes.array,
  groupBy: PropTypes.string
};
