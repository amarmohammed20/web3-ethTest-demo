import { Connectors } from 'web3-react'

const { InjectedConnector, NetworkOnlyConnector } = Connectors

//Supported network is Ropsten
const MetaMask = new InjectedConnector({ supportedNetworks: [3] })

const Infura = new NetworkOnlyConnector({
    providerURL: 'https://ropsten.infura.io/v3/b829a793e872483da9134ad6c7071d4b'
  })
   
const connectors = { MetaMask, Infura }

export default {connectors}

