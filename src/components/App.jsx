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
      clicks: 0,
      show: true,
      masterAlcoholList: []
    };
    this.handleAddingNewAlcoholToList = this.handleAddingNewAlcoholToList.bind(this);
    this.handleOrderConfirmation = this.handleOrderConfirmation.bind(this);
  }

  handleOrderConfirmation(){
    this.setState({clicks: this.state.clicks +1});
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
        <button onClick={this.handleOrderConfirmation}>Click to increment by 1</button>
        { this.state.show ? <h2>{ this.state.clicks }</h2> : '' }
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
