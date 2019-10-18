import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header style={headerStyle}>
        <h1 style={titleStyle}>SupplyChain Management Blockchain System</h1>
       
        <Link style={linkStyle} to="/">Home</Link><br/>
        <Link style={linkStyle} to="/participants">Participants</Link><br/>
        <Link style={linkStyle} to="/addProduct">Add Product</Link><br/>
        <Link style={linkStyle} to="/billing">Billing</Link><br/>
        <Link style={loginStyle} to="/login">Login/SignUp</Link>
           
      </header>
    )
  }
}

const loginStyle={
    color: '#fff',
    textDecoration: 'none'

}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'right',
  padding: '10px'
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none'

}

const titleStyle = {
  textAlign: 'left'
}

export default Header;
 