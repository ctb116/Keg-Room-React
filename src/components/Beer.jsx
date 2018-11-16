import React from 'react';
import PropTypes from 'prop-types';


function Beer(props){
  
  return (
    <div>
      <style  jsx>{`

      `}</style>
        
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
          <tr>
            <th scope="row">{props.masterKegList.map((beerlist, index) =>
              <td key={index}>
                {beerlist}
              </td>
            )}
            </th>
          </tr>
        </tbody>
      </table>  
    </div>
      
  );
}
  
Beer.propTypes = {
  masterKegList: PropTypes.string,
};
  
export default Beer;