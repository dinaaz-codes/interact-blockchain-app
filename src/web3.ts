import Web3 from "web3";

let web3: Web3;

export const getWeb3 = () => {
  if (!web3) web3 = new Web3(getProvider());

  return web3;
};

export const getProvider = () =>{
    const provider = window.ethereum;

    if(!provider) throw new Error('Please install metamask!');

    return provider;
}

export const connectWallet = async () => {
    const web3 = getWeb3();
    const accounts = await web3.eth.requestAccounts();

    console.log(`You are connected to your account ${accounts[0]}`);
};
