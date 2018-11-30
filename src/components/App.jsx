import React from 'react';
import Header from './Header';
import Admin from './Admin';
import AlcoholList from './AlcoholList';
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

  handleAddingNewAlcoholToList(newAlcohol){
  var masterAlcoholList = this.state.masterAlcoholList.slice();
  masterAlcoholList.push(newAlcohol);
  this.setState({masterAlcoholList: newMasterAlcoholList});
}

render() {
  return (
    <div>
      <style global jsx>{`
        font-family: Helvetica;
        body {
          background-color: #d9dadc;
        }
      `}</style>
      <Header/>
      <Switch>
        <Route exact path='/' component={AlcoholList}/>
        <Route path='/admin' render={()=><Admin alcoholList={this.state.masterAlcoholList} />} />
        <Route component={Error404}/>
      </Switch>
    </div>
  );
}

}

//App.propTypes = {
//};

export default App;
