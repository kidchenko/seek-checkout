import React from 'react';
import PropTypes from 'prop-types';

export function CustomerListItem(props){
  return (
      <option value={props.customer.name}>{props.customer.name}</option>
    )
}

CustomerListItem.propTypes = {
  customer: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired
};

export default CustomerListItem;
