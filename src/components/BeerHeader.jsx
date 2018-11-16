import React from 'react';
import BeerList from './BeerList';


function BeerHeader(){

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
            <th scope="row">1</th>
            <BeerList/>
          </tr>
        </tbody>
      </table>

    </div>
  );
}


export default BeerHeader;
