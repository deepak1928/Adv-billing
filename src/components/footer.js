import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <Footer style={footerStyle}>
        <h1 style={titleStyle}>SupplyChain Management Blockchain System</h1>
       
        <Link style={linkStyle} to="/">Home</Link><br/>
        <Link style={linkStyle} to="/participants">Participants</Link><br/>
        <Link style={linkStyle} to="/addProduct">Add Product</Link><br/>
        <Link style={linkStyle} to="/billing">Billing</Link><br/>
        <Link style={loginStyle} to="/login">Login/SignUp</Link>
           
      </Footer>
    )
  }
}

const loginStyle={
    color: '#fff',
    textDecoration: 'none'

}

const footerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none'

}

const titleStyle = {
  textAlign: 'left'
}

export default Footer;
 