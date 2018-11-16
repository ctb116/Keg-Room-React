import React from 'react';
import PropTypes from 'prop-types';


function Beer(props){
  
  return (
    <div>
      <style  jsx>{`
        div {
          z-index: -1;
        }

      `}</style>
        <p>{props.name}</p>
      <table className="table table-hover">
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

            <p>{props.name}</p>
      
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