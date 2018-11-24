import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from "react-router-dom";
import NavBar from "./NavBar.js";
import MainScreen from "./MainScreen.js";
import TransactionList from "./TransactionList.js"

class App extends Component {
  render() {
    return (
      <div className="App">
          <Route exact path="/" render={() => (
            <div>
              <NavBar></NavBar>
              <MainScreen></MainScreen>
            </div>
          )}/>

          <Route exact path="/transaction-list" render={() => (
              <div>
                <NavBar></NavBar>
                <TransactionList></TransactionList>
              </div>
          )}/>

      </div>
    );
  }
}

export default App;
