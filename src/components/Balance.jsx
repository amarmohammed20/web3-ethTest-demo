import React, { useState } from 'react';
import Web3 from 'web3';

const Balance = () => {

    const [accountInfo, setAccountInfo] = useState('');
    const { ethereum } = window;
    
    const getBalance = async () => new Promise ((resolve, reject) => {
        let web3;
        web3 = new Web3(ethereum.currentProvider)
        web3.eth.getAccounts(
            (error, accounts) => (error ? reject(error) : resolve(accounts) && setAccountInfo(JSON.stringify(accounts)) &&console.log(accounts))
        )
    })

    return (
        <div>
            <p>The balance is stored here.</p>
            <p>The address is {accountInfo}</p>
        </div>
    )
}

export default Balance;