import React from 'react';
import PropTypes from 'prop-types';

export default function CustomerListItem(props){
  return (
      <option value={props.customer.value}>{props.customer.name}</option>
    )
}

CustomerListItem.propTypes = {
  customer: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired
};
