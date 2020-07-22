import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import SignUp from './Seller/SignUp'
import ListWatch from './Seller/ListWatch'
import { StateProvider } from './context'
import Homepage from './Seller/Homepage';
import SignInSide from './Seller/Login';
import SignUpBuyer from './Buyer/SignUpBuyer'
import TestStripe from './testStripe'
import BuyerHomepage from './Buyer/buyerhomepage';
import SignInSideBuyer from './Buyer/SignInSideBuyer'
import HeaderBar from './Seller/HeaderBar';
import BuyerHeaderBar from './Buyer/BuyerHeaderBar';
import Inventory from './Buyer/Inventory';

function App() {
  function withSellerMenu(page){
    return(<div>
      <HeaderBar/>
      {page}
    </div>);
  }
  function withBuyerMenu(page){
    return(<div>
      <BuyerHeaderBar/>
      {page}
    </div>);
  }
  return (
    <StateProvider >
      <div className="App">
        <BrowserRouter>
        {/* Seller Links */}
          <Route exact path='/seller/signup' render={() => <SignUp />} />
          <Route exact path='/seller/login' render={() => <SignInSide />} />
          <Route exact path='/seller/home' render={() => withSellerMenu(<Homepage />)} />
          <Route exact path='/seller/listwatch' render={() => <ListWatch />} />

         {/* Buyer Links */}
         <Route exact path='/buyer/signup' render={() => <SignUpBuyer />} />
          <Route exact path='/buyer/login' render={() => <SignInSideBuyer />} />
          <Route exact path='/buyer/home' render={() => withBuyerMenu(<BuyerHomepage />)} />
          <Route exact path='/buyer/inventory' render={() => withBuyerMenu(<Inventory />)} />

          {/* <Route exact path='/seller/listwatch' render={() => <ListWatch />} /> */}

          <Route exact path='/' render={() => <TestStripe />} />
        </BrowserRouter>
      </div>
    </StateProvider>
  );
}


export default App;
//  <header className="App-header">
// <img src={logo} className="App-logo" alt="logo" />
// <p>
//   Edit <code>src/App.js</code> and save to reload.
// </p>
// <a
//   className="App-link"
//   href="https://reactjs.org"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   Learn React
// </a>
// </header>