import React from 'react';
import { Component } from 'react';
import './PaymentScreen.css';

class PaymentScreen extends Component {

  state = {
    recipient_name : "",
    recipient_number : "",
    sum: "",
    title : "",
    recipient_name_hints: [],
    recipient_number_hints: [],
    sum_hints: [],
    title_hints: [],
  }

  updateQuery =(query, value) => {
      this.setState({[query]:value});
  }

  render() {
    return(
      <div className="payment-screen-wrapper">
        <form className="payment-screen">
          <h2>Payment Details</h2>
          <p className="payment-screen-input-name">Title</p>
          <input className="payment-screen-input-field" list="titles" type="text" name="title" onChange={(event)=>{this.updateQuery(event.target.name, event.target.value)}} value={this.state.title}></input>
          <datalist id="titles" >{this.state.title_hints.map(element => (<option value={element}></option>))}</datalist>
          <p className="payment-screen-input-name">Recipient Name</p>
          <input className="payment-screen-input-field" list="names" type="text" name="recipient_name" onChange={(event)=>{this.updateQuery(event.target.name, event.target.value)}} value={this.state.recipient_name}></input>
          <datalist id="names" >{this.state.recipient_name_hints.map(element => (<option value={element}></option>))}</datalist>
          <p className="payment-screen-input-name">Account Number</p>
          <input className="payment-screen-input-field" list="numbers" type="text" name="recipient_number" onChange={(event)=>{this.updateQuery(event.target.name, event.target.value)}} value={this.state.recipient_number}></input>
          <datalist id="numbers" >{this.state.recipient_number_hints.map(element => (<option value={element}></option>))}</datalist>
          <p className="payment-screen-input-name">Amount</p>
          <input className="payment-screen-input-field" list="sums" type="text" name="sum" onChange={(event)=>{this.updateQuery(event.target.name, event.target.value)}} value={this.state.sum}></input>
          <datalist id="sums" >{this.state.sum_hints.map(element => (<option value={element}></option>))}</datalist>
          <input  className="payment-screen-submit" type="submit" value="Submit"></input>
        </form>
      </div>
    )
  }

}

export default PaymentScreen
