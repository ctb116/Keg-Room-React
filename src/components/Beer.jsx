import React from 'react';
import PropTypes from 'prop-types';


function Beer(props){

  return (
    <div>
      <style  jsx>{`

      `}</style>
          <td>{props.name}</td>
          <td>{props.brewer}</td>
          <td>{props.description}</td>
          <td>{props.abv}</td>
          <td>{props.price}</td>
          <td>{props.remaining}</td>
      </div>
  );
}

Beer.propTypes = {
  name: PropTypes.string,
  brewer: PropTypes.string,
  description: PropTypes.string,
  abv: PropTypes.string,
  price: PropTypes.string,
  remaining: PropTypes.string,
};

export default Beer;
