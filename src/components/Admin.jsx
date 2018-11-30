import React from 'react';
import PropTypes from 'prop-types';
import AlcoholList from './AlcoholList';
import { Link } from 'react-router-dom';

function Admin(props){
  return (
    <div>
      <h2>Admin</h2>
      <h3><Link to="/newproduct">Add New Product</Link></h3>
      <AlcoholList alcoholList={props.alcoholList} />
    </div>
  );
}

Admin.propTypes = {
  alcoholList: PropTypes.array
};

export default Admin;
