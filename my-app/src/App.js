import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from "react-router-dom";
import NavBar from "./NavBar.js";
import MainScreen from "./MainScreen.js";
import TransactionList from "./TransactionList.js";
import PaymentScreen from "./PaymentScreen.js";
import IncomeScreen from "./IncomeScreen.js";

class App extends Component {

  state = {userData: {}}

  componentDidMount() {
    fetch("http://40.115.42.17:8080/name/1/00006667")
      .then(res => res.json())
      .then(res => {this.setState({userData:res})})
  }

  render() {
    return (
      <div className="App">
          <Route exact path="/" render={() => (
            <div>
              <NavBar
              data={this.state.userData}></NavBar>
              <MainScreen></MainScreen>
            </div>
          )}/>

          <Route exact path="/transaction-list" render={() => (
              <div>
                <NavBar
                data={this.state.userData}></NavBar>
                <TransactionList></TransactionList>
              </div>
          )}/>

          <Route exact path="/payments" render={() => (
              <div>
                <NavBar
                data={this.state.userData}></NavBar>
                <PaymentScreen></PaymentScreen>
              </div>
          )}/>

          <Route exact path="/balance" render={() => (
              <div>
                <NavBar
                data={this.state.userData}></NavBar>
                <IncomeScreen></IncomeScreen>
              </div>
          )}/>

      </div>
    );
  }
}

export default App;
