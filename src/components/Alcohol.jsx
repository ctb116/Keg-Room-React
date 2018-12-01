import React from 'react';
import PropTypes from 'prop-types';


function Alcohol(props){

  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.brewer}</td>
      <td>{props.description}</td>
      <td>{props.abv}</td>
      <td>{props.price}</td>
      <td>{props.remaining}</td>
      <td><button className="btn btn-danger" onClick={() => {props.onOrderSelection;}}>Order</button></td>
    </tr>
  );
}

Alcohol.propTypes = {
  name: PropTypes.string,
  brewer: PropTypes.string,
  description: PropTypes.string,
  abv: PropTypes.string,
  price: PropTypes.string,
  remaining: PropTypes.int,
  onOrderSelection: PropTypes.func
};

export default Alcohol;
