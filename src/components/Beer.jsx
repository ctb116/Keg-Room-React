import React from 'react';
import PropTypes from 'prop-types';

function Beer(props){
  
  return (
    <div>
      <style  jsx>{`
      div {
      
      }
      `}</style>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Brewer</th>
            <th scope="col">Description</th>
            <th scope="col">ABV</th>
            <th scope="col">Price</th>
            <th scope="col">Remaining</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>{props.name}</td>
            <td>{props.brewer}</td>
            <td>{props.description}</td>
            <td>{props.abv}</td>
            <td>{props.price}</td>
            <td>{props.remaining}</td>
          </tr>
        </tbody>
      </table>
      
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