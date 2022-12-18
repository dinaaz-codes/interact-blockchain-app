import React, { useEffect } from "react";
import "./App.css";
import { getWeb3 } from "./web3";
import ERC20 from "./abi/ERC20.json";
import ConnectWalletButton from "./component/ConnectWalletButton";
import TokenDetail from "./component/TokenDetail";
import useWeb3 from "./hooks/useWeb3";
import { Route, Routes } from "react-router-dom";
import ViewTokenDetails from "./pages/ViewTokenDetails";
import ViewAllowance from "./pages/ViewAllowance";
import Home from "./pages";
import Nav from "./component/Nav";

declare global {
  interface Window {
    ethereum: any;
  }
}

function App() {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/token-detail" element={<ViewTokenDetails/>}></Route>
        <Route path="/allowance" element={<ViewAllowance/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
