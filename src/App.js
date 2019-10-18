import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router ,Route} from 'react-router-dom'
import Header from './components/Header'
import { Link } from 'react-router-dom';

import AddProduct from './components/addProduct'
import Login from './components/login'
import Billing from './components/billing'
import MMCityHead from './components/MMCityHead'
import MMStoreHead from './components/MMStoreHead'
import MMNetworkAdmin from './components/MMNetworkAdmin'
import MMStorePersonal from './components/MMStorePersonal'
import SignUp from './components/signUp'
import Footer from './components/footer'

function App() {
  return (
    <Router>
        <Header/>
        <Route exact path={"/"}  render={props=>(
            <React.Fragment>
              <h1 >Home</h1>
              <p>This is a Blockchain secured supply chain management system for Megamarts.</p> 
             
             </React.Fragment>
        )}/>
        <Route exact path={"/participants"}  render={props=>(
              
            <React.Fragment>
              <h1>Participants</h1>
              <ul>
                <Link to="/participants/MMNetworkAdmin">MMNetworkAdmin</Link><br/>
                <Link to="/participants/MMCityHead">MMCityHead</Link><br/>
                <Link to="/participants/MMStoreHead">MMStoreHead</Link><br/>
                <Link to="/participants/MMStorePersonal">MMStorePersonal</Link><br/>
              </ul>

           </React.Fragment>
        )}/>
        <Route exact path={"/addProduct"}  render={props=>(
             
            <React.Fragment>
              <h1>Add Product</h1>
              <AddProduct/>
             </React.Fragment> 
        )}/>
        <Route exact path={"/login"}  render={props=>(
           <React.Fragment>
           <h1>Login</h1>
           <Login/>
          </React.Fragment> 
        )}/>

        <Route exact path={"/billing"}  render={props=>(
            <React.Fragment>
              <h1>Billing</h1>
              <Billing/>
           </React.Fragment>  
        )}/>

        <Route exact path={"/participants/MMNetworkAdmin"}  render={props=>(
            <React.Fragment>
              <h1>MegaMart Network Admin Participants</h1>
              <MMNetworkAdmin/>
           </React.Fragment>  
        )}/>

        <Route exact path={"/participants/MMCityHead"}  render={props=>(
            <React.Fragment>
              <h1>Mega Mart City Head Participants</h1>
              <MMCityHead/>
           </React.Fragment>  
        )}/>

        <Route exact path={"/participants/MMStoreHead"}  render={props=>(
            <React.Fragment>
              <h1>Mega Mart Store Head Participants</h1>
              <MMStoreHead/>
           </React.Fragment>  
        )}/>
        <Route exact path={"/participants/MMStorePersonal"}  render={props=>(
            <React.Fragment>
              <h1>Mega Marts Store Personal Participants</h1>
              <MMStorePersonal/>
           </React.Fragment>  
        )}/>

      <Route exact path={"/signUp"}  render={props=>(
            <React.Fragment>
              <h1>Sign Up</h1>
              <SignUp/>
           </React.Fragment>  
        )}/>    
      <Footer/>
     </Router>   
  );
}

export default App;
