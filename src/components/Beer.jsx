import React from 'react';
import PropTypes from 'prop-types';

function Beer(props){

return (
  <div>
    <style  jsx>{`

        `}</style>
      <p>{props.name}</p>
      <p>{props.brewer}</p>
      <p>{props.description}</p>
      <p>{props.abv}</p>
      <p>{props.price}</p>
      <p>{props.remaining}</p>
      
    </div>

  );
}
Products.propTypes = {
  month: PropTypes.string,
  selection: PropTypes.string,
};

export default Beer;