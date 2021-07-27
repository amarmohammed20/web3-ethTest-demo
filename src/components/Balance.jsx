import React, { useState } from 'react';

const Balance = () => {

    const [walletAdress, setwalletAdress] = useState('');

    return (
        <div>
            <p>The balance is stored here.</p>
            <p>The address is {walletAdress}</p>
        </div>
    )
}

export default Balance;