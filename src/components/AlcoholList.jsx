import React from 'react';
import Alcohol from './Alcohol';
import PropTypes from 'prop-types';

var masterKegList = [
  {
    name: 'Ruby Zozzle',
    brewer: 'Hi-Wheel',
    description: 'Sparkling Wine & Grapefruit',
    abv: '6.8%',
    price: '7',
    remaining: 20
  },
  {
    name: 'Tart N Juicy',
    brewer: 'Epic',
    description: 'Sour IPA',
    abv: '4.5%',
    price: '6',
    remaining: 60
  },
  {
    name: 'Hamms',
    brewer: 'Miller/Coors',
    description: 'American Lager',
    abv: '4.7%',
    price: '3',
    remaining: 65
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
          {masterKegList.map((items, index) =>
            <Alcohol name={items.name}
              brewer={items.brewer}
              description={items.description}
              abv={items.abv}
              price={items.price}
              remaining={items.remaining}
              key={index}
              onOrderSelection={props.onOrderSelection}/>
          )}
          {props.alcoholList.map((items, index) =>
            <Alcohol name={items.name}
              brewer={items.brewer}
              description={items.description}
              abv={items.abv}
              price={items.price}
              remaining={items.remaining}
              key={index}
              onOrderSelection={props.onOrderSelection}/>
          )}
        </tbody>
      </table>
    </div>
  );
}

AlcoholList.propTypes = {
  alcoholList: PropTypes.array,
  onOrderSelection: PropTypes.func.isRequired,
  selectedTicket: PropTypes.object
};


export default AlcoholList;
