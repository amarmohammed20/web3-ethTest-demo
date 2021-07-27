import './App.css';
import connector from './components/connectors';
import Web3Provider from 'web3-react'

import Header from './components/Header';
import Balance from './components/Balance';
import ConnectMetaMask from './components/connectMetaMask';

function App() {
  return (
    <div className="App">
      <Web3Provider 
        connectors={connector}
        libraryName={'web3.js'}  
      />
      <Header />
      <ConnectMetaMask />
      <Balance />
    </div>
  );
}

export default App;
