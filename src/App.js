import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import SignUp from './Seller/SignUp'
import { StateProvider } from './context'
function App() {
  return (
    <StateProvider >
      <div className="App">
        <BrowserRouter>
          <Route exact path='/seller/signup' render={() => <SignUp />} />
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