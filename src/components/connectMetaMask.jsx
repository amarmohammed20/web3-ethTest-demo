import React, {useEffect} from 'react';
import { useWeb3Context } from 'web3-react';

const ConnectMetaMask = () => {

    const context = useWeb3Context();
    console.log(useWeb3Context)

    const onClick = () => {
        context.setConnector("MetaMask");
    }

    useEffect(() => {
        context.setFirstValidConnector(['MetaMask', 'Infura'])
      }, []);

    return (
        <div>
            <button onClick={onClick}>Connect To MetaMask</button>
        </div>
    )
}

export default ConnectMetaMask;