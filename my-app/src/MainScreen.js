import React from 'react';
import { Component } from 'react';
import './MainScreen.css';
import Transaction from './Transaction.js'

class MainScreen extends Component {

state ={
    transactions: [],
    userData: {},
}

componentDidMount() {
  fetch("http://40.115.42.17:8080/last/1/00006667/3")
  .then(res => res.json())
  .then(res => {this.setState({transactions : res})})
  .then(
  fetch("http://40.115.42.17:8080/name/1/00006667")
  .then(res => res.json())
  .then(res => {this.setState({userData: res})}));
}

  render() {
    return(
        <div className="MainScreen">
        <div className="MainScreen-userData">
          <p className="MainScreen-userData-balance">{this.state.userData.bookingBalance+" PLN"}</p>
          <p>{this.state.userData.accountNumber}</p>

        </div>
        <h2 className="MainScreen-details">Last Transactions</h2>
        {this.state.transactions.map((transaction) => (
          <Transaction transaction={transaction}/>
        ))}
        </div>
    )
  }
}

export default MainScreen
