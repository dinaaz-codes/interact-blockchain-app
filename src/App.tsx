import React from 'react';
import './App.css';
import Web3 from 'web3';
import { connectWallet, getWeb3 } from './web3';
import ERC20 from './abi/ERC20.json';

declare global{
   interface Window{
    ethereum:any
   }
}

const getTotalSupply = async () =>{
    const web3 = getWeb3();

   const chainlink= new web3.eth.Contract(ERC20 as any,'0x514910771AF9Ca656af840dff83E8264EcF986CA');

   const totalSupply = await chainlink.methods.totalSupply().call();
   console.log('Total Chainlink Supply:', totalSupply);
}

function App() {
  return (
    <div >
      <button onClick={connectWallet}>Connect to wallet</button>
      <button onClick={getTotalSupply}>Total Chainlink supply</button>
    </div>
  );
}

export default App;
