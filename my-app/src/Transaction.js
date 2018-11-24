import React from 'react';
import { Component } from 'react';
import './Transaction.css';

class Transaction extends Component {
  render() {
    return(
      <div className={(this.props.transaction.flag===-1 ? "transaction novelty" : "transaction")}>
        <p className="transaction-info"><span className="transaction-info-description">Kowta: </span>{this.props.transaction.amount}</p>
          <p className="transaction-info"><span className="transaction-info-description">Opis: </span>{this.props.transaction.description}</p>
        <p className="transaction-info"><span className="transaction-info-description">Na Rachunek: </span>{this.props.transaction.recipient.accountNumber}</p>
        <p className="transaction-info"><span className="transaction-info-description">Bank: </span>{this.props.transaction.recipient.bank.name}</p>
      </div>
    )
  }
}

export default Transaction
