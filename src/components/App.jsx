import React from 'react';
import Header from './Header';
import Admin from './Admin';
import AlcoholList from './AlcoholList';
import NewAlcoholForm from './NewAlcoholForm';
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
    var newMasterAlcoholList = this.state.masterAlcoholList.slice();
    newMasterAlcoholList.push(newAlcohol);
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
          <Route exact path='/' render={()=><AlcoholList alcoholList={this.state.masterAlcoholList} />} />
          <Route path='/admin' render={()=><Admin alcoholList={this.state.masterAlcoholList} />} />
          <Route exact path='/newproduct' render={()=><NewAlcoholForm onNewAlcoholCreation={this.handleAddingNewAlcoholToList} />} />
          <Route component={Error404}/>
        </Switch>
      </div>
    );
  }

}

//App.propTypes = {
//};

export default App;
