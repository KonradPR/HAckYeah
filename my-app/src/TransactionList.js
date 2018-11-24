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
    .then(res => res.transactions)
    .then(res => {this.setState({transactions : res})})
  }

  render() {
let  valid_transactions =this.state.transactions.filter(transaction => {
    return  transaction.recipient !== undefined && transaction.recipient.accountNumber!== undefined
    })

    return(
      <div className="transaction-list-wrapper">
        <ul className="transaction-list">
          {valid_transactions.map(transaction => (
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
