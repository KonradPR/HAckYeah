import React from 'react';
import { Component } from 'react';
import './MainScreen.css';
import Transaction from './Transaction.js'

class MainScreen extends Component {

state ={
    transactions: []
}

componentDidMount() {
  fetch("http://40.115.42.17:8080/last/1/00006667/4")
  .then(res => res.json())
  .then(res => res.transactions)
  .then(res => {this.setState({transactions : res})})
}

  render() {
    return(
        <div className="MainScreen">
        <h2 className="MainScreen-details">Ostatnie Transakcje</h2>
        {this.state.transactions.map((transaction) => (
          <Transaction transaction={transaction}/>
        ))}
        </div>
    )
  }
}

export default MainScreen
