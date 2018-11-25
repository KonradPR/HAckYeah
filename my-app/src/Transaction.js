import React from 'react';
import { Component } from 'react';
import './Transaction.css';

class Transaction extends Component {
  render() {
    return(
      <div className={(this.props.transaction.flag===-1 ? "transaction novelty" : "transaction")}>
        <p className="transaction-info"><span className="transaction-info-description">Amount: </span><span className={this.props.transaction.amount<0? "outflow" : "inflow"}>{this.props.transaction.amount}</span></p>
        <p className="transaction-info"><span className="transaction-info-description">Description: </span>{this.props.transaction.description}</p>
        <p className="transaction-info"><span className="transaction-info-description">Account Number: </span>{this.props.transaction.accountNumber}</p>
        <p className="transaction-info"><span className="transaction-info-description">Bank: </span>{this.props.transaction.bank}</p>
      </div>
    )
  }
}

export default Transaction
