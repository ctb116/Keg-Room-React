import React from 'react';
import PropTypes from 'prop-types';
import AlcoholList from './AlcoholList';

function Admin(props){
  return (
    <div>
      <h2>Admin</h2>
      <AlcoholList alcoholList={props.alcoholList} />
    </div>
  );
}

Admin.propTypes = {
  alcoholList: PropTypes.array
};

export default Admin;
