import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import SignUp from './Seller/SignUp'
import ListWatch from './Seller/ListWatch'
import { StateProvider } from './context'
import Homepage from './Seller/Homepage';
function App() {
  return (
    <StateProvider >
      <div className="App">
        <BrowserRouter>
        {/* Seller Links */}
          <Route exact path='/seller/signup' render={() => <SignUp />} />
          <Route exact path='/seller/home' render={() => <Homepage />} />
          <Route exact path='/seller/listwatch' render={() => <ListWatch />} />

          <Route exact path='/' render={() => <div>Homepage</div>} />
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