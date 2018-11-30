import React from 'react';
import Header from './Header';
import BeerList from './BeerList';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';


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
      <Switch>
        <Route exact path='/' component={BeerList}/>
        <Route component={Error404}/>
      </Switch>
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
