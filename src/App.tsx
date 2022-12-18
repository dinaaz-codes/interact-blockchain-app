import React, { useEffect } from "react";
import "./App.css";
import Web3 from "web3";
import { connectWallet, getWeb3 } from "./web3";
import ERC20 from "./abi/ERC20.json";
import ConnectWalletButton from "./component/ConnectWalletButton";
import TokenDetail from "./component/TokenDetail";
import useWeb3 from "./hooks/useWeb3";

declare global {
  interface Window {
    ethereum: any;
  }
}

const getTotalSupply = async () => {
  const web3 = getWeb3();

  const chainlink = new web3.eth.Contract(
    ERC20 as any,
    "0x514910771AF9Ca656af840dff83E8264EcF986CA"
  );

  const totalSupply = await chainlink.methods.totalSupply().call();
  console.log("Total Chainlink Supply:", totalSupply);
};

function App() {
  const { isConnected, connectWallet } = useWeb3();

  useEffect(()=>{
    console.log(isConnected)
  },[isConnected]);

  return (
    <div>
      <ConnectWalletButton isConnected={isConnected} onClickHandler={connectWallet}/>
      {isConnected && <TokenDetail />}
    </div>
  );
}

export default App;
