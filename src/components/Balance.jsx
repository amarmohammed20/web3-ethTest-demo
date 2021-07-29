import React, { useState, useEffect } from 'react';
//import Web3 from 'web3';

const Balance = () => {

    const [accountInfo, setAccountInfo] = useState('');
    const { ethereum } = window;
    const selectedAddress = ethereum.selectedAddress
    setAccountInfo(selectedAddress)
    /**const getBalance = async () => new Promise ((resolve, reject) => {
        ethereum.eth.getAccounts(
            (error, accounts) => (error ? reject(error) : resolve(accounts) && setAccountInfo(JSON.stringify(accounts)) && console.log(accounts))
        )
    })
    
    useEffect(() => {
        getBalance();
    },[]) **/

    return (
        <div>
            <p>The balance is stored here.</p>
            <p>The address is {accountInfo}</p>
        </div>
    )
}

export default Balance;