import './App.css';
import React from 'react';
import connector from './components/connectors';
import { Web3ReactProvider } from '@web3-react/core';
import Web3 from 'web3';
import Header from './components/Header';
import Balance from './components/Balance';
import ConnectMetaMask from './components/connectMetaMask';


function App() {
  return (
    <div className="App">
      <Web3ReactProvider 
        connectors={connector}
        libraryName={'web3.js'}
        web3Api={Web3}
      />
      <Header />
      <ConnectMetaMask />
      <Balance />
    </div>
  );
}

export default App;
