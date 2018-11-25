import React from 'react';
import { Component } from 'react';
import './IncomeScreen.css';

class IncomeScreen extends Component {
render() {
  return(
    <div className="incomeScreen-wrapper">
      <p className="incomeScreen-caption">Your balance in comparision to other useres</p>
      <div className="incomeScreen-barChart"><div className="incomeScreen-barChart-bar"></div></div>
      <p className="incomeScreen-caption">Your balance in comparision to similar users</p>
      <div className="incomeScreen-barChart"><div className="incomeScreen-barChart-bar"></div></div>
    </div>
  )
}
}

export default IncomeScreen
