import React from 'react';
//import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Beer from './Beer';
import BeerList from './BeerList';

/*
  import { Link } from 'react-router-dom';
  <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
*/

function App(){
  var styles = {
  };
  return (
    <div style={styles}>
      <style global jsx>{`
        font-family: Helvetica;
        body {
          background-color: #d9dadc;
        }
      `}</style>
      <Header/>
      <Beer/>
      <BeerList/>
      {/* <Switch>
        <Route exact path='/' component={} />
      </Switch> */}
    </div>
  );
}

//App.propTypes = {
//};

export default App;
