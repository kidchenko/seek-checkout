import React, { Component } from 'react';
import _ from 'lodash';

import CheckoutItem from './CheckoutItem';

export default class CheckoutItemGroup extends Component {

  renderGroupedItens() {
    const grouped = _.groupBy(this.props.itens, this.props.groupBy);
    return _.map(grouped, (value, key) => {
      return <CheckoutItem key={key}
          quantity={value.length}
          {...value[0]}
      />
    });
  }

  render() {
    return (
      <ul>
      {
        this.renderGroupedItens()
      }
      </ul>
    )
  }
}
