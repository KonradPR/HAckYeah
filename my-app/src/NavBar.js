import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
library.add(faBars)

class NavBar extends Component {

    navbar_toggle() {
      let links = window.document.querySelector('.nav-main');
      links.classList.toggle("active");
    }

    render() {
      return(
        <nav className="navbar">
        <FontAwesomeIcon className="navbar-toggle" icon="bars" onClick={this.navbar_toggle}/>
          <ul className="nav-main">
              <li><Link className="nav-links" onClick={this.navbar_toggle} to="/">Home</Link></li>
              <li><Link className="nav-links" onClick={this.navbar_toggle} to="/transaction-list">Transactions</Link></li>
              <li><Link className="nav-links" onClick={this.navbar_toggle} to="/payments">Payments</Link></li>
              <li><Link className="nav-links" onClick={this.navbar_toggle} to="/">Link</Link></li>
              <li><Link className="nav-links" onClick={this.navbar_toggle} to="/">Link</Link></li>
          </ul>
          <span className="nav-logo">AIdvisor</span>
          <span className="nav-logo-name">{this.props.data.accountNameClient}</span>
        </nav>
      )
    }
}

export default NavBar
