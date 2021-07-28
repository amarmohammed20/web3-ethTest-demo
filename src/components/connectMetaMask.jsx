import React, { useState, useRef } from 'react';

const ConnectMetaMask = () => {

    const { ethereum } = window;
    let onboardButton = useRef();

    const [buttonText, setButtonText] = useState("")

    //Created check function to see if the MetaMask extension is installed
    const isMetaMaskInstalled = async () => {
        //Have to check the ethereum binding on the window object to see if it's installed
        if (ethereum.isMetaMask) {
            setButtonText("Connect to MetaMask")
        } else {
            setButtonText("MetaMask is not installed!")
        }
    };

    const connectMetaMask = async () => {
        isMetaMaskInstalled();
        onboardButton.current.setAttribute("disabled", "disabled");
        try {
            // Will open the MetaMask UI
            // You should disable this button while the request is pending!
            await ethereum.request({ method: 'eth_requestAccounts' });
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <button ref={onboardButton} onClick={connectMetaMask}>{buttonText}</button>
        </div>
    )
}

export default ConnectMetaMask;