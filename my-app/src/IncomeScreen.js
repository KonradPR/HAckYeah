import React from 'react';
import { Component } from 'react';
import './IncomeScreen.css';

class IncomeScreen extends Component {

  state = {
    userData: {
      world:0,
      city:0,
    }
  }
  componentDidMount() {
    fetch("http://40.115.42.17:8080/name/1/00006667")
      .then(res => res.json())
      .then(res => {this.setState({userData:res})})
  }

render() {
  return(
    <div className="incomeScreen-wrapper">
      <p className="incomeScreen-caption">Your balance in comparision to other useres</p>
      <div className="incomeScreen-barChart"><div className="incomeScreen-barChart-bar" style={{width: `calc(100%*${this.state.userData.world})`}}></div></div>
      <p className="incomeScreen-caption">Your balance in comparision to users in your area</p>
      <div className="incomeScreen-barChart"><div className="incomeScreen-barChart-bar" style={{width: `calc(100%*${this.state.userData.city})`}}></div></div>
    </div>
  )
}
}

export default IncomeScreen
