import React from 'react';
import Header from './Header';
import Admin from './Admin';
import BeerList from './BeerList';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterAlcoholList: []
    };
    this.handleAddingNewAlcoholToList = this.handleAddingNewAlcoholToList.bind(this);
  }

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
        <Route path='/admin' component={Admin} />
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
