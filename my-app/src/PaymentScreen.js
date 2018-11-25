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
this.setState({
  name : "",
  accountNumber : "",
  amount: "",
  description : "",
  recipient_name_hints: [],
  recipient_number_hints: [],
  sum_hints: [],
  title_hints: [],

})
  }

  askHints = (e) => {
    axios({
      method: 'post',
      url: 'http://40.115.42.17:8080/transfer',
      data: {'name':this.state.name,'accountNumber':this.state.accountNumber,'amount':this.state.amount,'description':this.state.description}
    })
    .then(res => res.json())
    .then(res =>console.log())
    //.then(res => this.setState({'recipient_name_hints':res.name,'recipient_number_hints':res.accountNumber,'sum_hints':res.}))
  }


  render() {
    return(
      <div className="payment-screen-wrapper">
        <form className="payment-screen" onSubmit={this.makePayment}>
          <h2>Payment Details</h2>
          <p className="payment-screen-input-name">Title</p>
          <input onFocus={(e) => {this.askHints(e)}} className="payment-screen-input-field" list="titles" type="text" name="description" onChange={(event)=>{this.updateQuery(event.target.name, event.target.value)}} value={this.state.description}></input>
          <datalist id="titles" >{this.state.title_hints.map(element => (<option value={element}></option>))}</datalist>
          <p className="payment-screen-input-name">Recipient Name</p>
          <input onFocus={(e) => {this.askHints(e)}} className="payment-screen-input-field" list="names" type="text" name="name" onChange={(event)=>{this.updateQuery(event.target.name, event.target.value)}} value={this.state.name}></input>
          <datalist id="names" >{this.state.recipient_name_hints.map(element => (<option value={element}></option>))}</datalist>
          <p className="payment-screen-input-name">Account Number</p>
          <input onFocus={(e) => {this.askHints(e)}} className="payment-screen-input-field" list="numbers" type="text" name="accountNumber" onChange={(event)=>{this.updateQuery(event.target.name, event.target.value)}} value={this.state.accountNumber}></input>
          <datalist id="numbers" >{this.state.recipient_number_hints.map(element => (<option value={element}></option>))}</datalist>
          <p className="payment-screen-input-name">Amount</p>
          <input onFocus={(e) => {this.askHints(e)}} className="payment-screen-input-field" list="sums" type="text" name="amount" onChange={(event)=>{this.updateQuery(event.target.name, event.target.value)}} value={this.state.amount}></input>
          <datalist id="sums" >{this.state.sum_hints.map(element => (<option value={element}></option>))}</datalist>
          <input  className="payment-screen-submit" type="submit" value="Submit"></input>
        </form>

      </div>
    )
  }

}

export default PaymentScreen
