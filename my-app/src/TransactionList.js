import React from 'react';
import { Component } from 'react';
import './TransactionList.css';
import Transaction from './Transaction.js'

class TransactionList extends Component {

  state ={
      transactions: []
  }
  componentDidMount() {
    fetch("http://40.115.42.17:8080/last/1/00006667/50")
    .then(res => res.json())
    .then(res => {this.setState({transactions : res})})
  }

  render() {
    return(
      <div className="transaction-list-wrapper">
        <ul className="transaction-list">
          {this.state.transactions.map(transaction => (
            <li>
              <Transaction transaction={transaction}/>
              </li>
            ))}
        </ul>
      </div>
    )
  }
}


export default TransactionList
