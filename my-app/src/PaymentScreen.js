import React from 'react';
import { Component } from 'react';
import './PaymentScreen.css';
const axios = require('axios');

class PaymentScreen extends Component {

  state = {
    name : "",
    accountNumber : "",
    amount: "",
    description : "",
    recipient_name_hints: [],
    recipient_number_hints: [],
    sum_hints: [],
    title_hints: [],
  }

  updateQuery =(query, value) => {
      this.setState({[query]:value});
  }

 makePayment = (e) => {
   e.preventDefault();
    axios({
      method: 'post',
      url: 'http://40.115.42.17:8080/transfer',
      data: {'name':this.state.name,'accountNumber':this.state.accountNumber,'amount':this.state.amount,'description':this.state.description}
});
  }


  render() {
    return(
      <div className="payment-screen-wrapper">
        <form className="payment-screen" onSubmit={this.makePayment}>
          <h2>Payment Details</h2>
          <p className="payment-screen-input-name">Title</p>
          <input className="payment-screen-input-field" list="titles" type="text" name="description" onChange={(event)=>{this.updateQuery(event.target.name, event.target.value)}} value={this.state.title}></input>
          <datalist id="titles" >{this.state.title_hints.map(element => (<option value={element}></option>))}</datalist>
          <p className="payment-screen-input-name">Recipient Name</p>
          <input className="payment-screen-input-field" list="names" type="text" name="name" onChange={(event)=>{this.updateQuery(event.target.name, event.target.value)}} value={this.state.recipient_name}></input>
          <datalist id="names" >{this.state.recipient_name_hints.map(element => (<option value={element}></option>))}</datalist>
          <p className="payment-screen-input-name">Account Number</p>
          <input className="payment-screen-input-field" list="numbers" type="text" name="accountNumber" onChange={(event)=>{this.updateQuery(event.target.name, event.target.value)}} value={this.state.recipient_number}></input>
          <datalist id="numbers" >{this.state.recipient_number_hints.map(element => (<option value={element}></option>))}</datalist>
          <p className="payment-screen-input-name">Amount</p>
          <input className="payment-screen-input-field" list="sums" type="text" name="amount" onChange={(event)=>{this.updateQuery(event.target.name, event.target.value)}} value={this.state.sum}></input>
          <datalist id="sums" >{this.state.sum_hints.map(element => (<option value={element}></option>))}</datalist>
          <input  className="payment-screen-submit" type="submit" value="Submit"></input>
        </form>
      </div>
    )
  }

}

export default PaymentScreen
