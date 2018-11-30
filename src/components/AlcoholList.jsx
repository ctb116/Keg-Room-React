import React from 'react';
import Beer from './Beer';
import PropTypes from 'prop-types';

var masterKegList = [
  {
    name: 'Ruby Zozzle',
    brewer: 'Hi-Wheel',
    description: 'Sparkling Wine & Grapefruit',
    abv: '6.8%',
    price: '7',
    remaining: '20'
  },
  {
    name: 'Tart N Juicy',
    brewer: 'Epic',
    description: 'Sour IPA',
    abv: '4.5%',
    price: '6',
    remaining: '60'
  },
  {
    name: 'Hamms',
    brewer: 'Miller/Coors',
    description: 'American Lager',
    abv: '4.7%',
    price: '3',
    remaining: '65'
  },
  {
    name: 'Prismatic',
    brewer: 'Ninkasi',
    description: 'Juicy IPA',
    abv:  '5.9%',
    price: '6',
    remaining: '75'
  },
  {
    name: 'Juicy Haze',
    brewer: 'New Belgium',
    description: 'India Pale Ale',
    abv:  '7.5%',
    price: '6',
    remaining: '18'
  },
  {
    name: '8 Hop',
    brewer: 'New Belgium',
    description: 'Pale Ale',
    abv:  '5.5%',
    price: '6',
    remaining: '58'
  }
];

function AlcoholList(props){
  return (
    <div>
      <style  jsx>{`
      `}</style>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Brewer</th>
            <th scope="col">Description</th>
            <th scope="col">ABV</th>
            <th scope="col">Price</th>
            <th scope="col">Remaining</th>
          </tr>
        </thead>
        <tbody>
          {masterKegList.map((keg, index) =>
            <Beer name={keg.name}
              brewer={keg.brewer}
              description={keg.description}
              abv={keg.abv}
              price={keg.price}
              remaining={keg.remaining}
              key={index}/>
          )}
          {props.alcoholList.map((items, index) =>
            <Beer name={items.name}
              brewer={items.brewer}
              description={items.description}
              abv={items.abv}
              price={items.price}
              remaining={items.remaining}
              key={index}/>
          )}
        </tbody>
      </table>
    </div>
  );
}

AlcoholList.propTypes = {
  alcoholList: PropTypes.array
};

export default AlcoholList;
