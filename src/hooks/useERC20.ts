import { useEffect, useState } from "react";
import useWeb3 from "./useWeb3";
import ERC20Abi from "./../abi/ERC20.json";
import { AbiItem } from "web3-utils";

const useERC20 = () => {
  const { createContract } = useWeb3();

  const getTokenName = async (contractAddress: string): Promise<string> => {
    const contract = await createContract(
      ERC20Abi as AbiItem[],
      contractAddress
    );

    return await contract.methods.name().call();
  };

  const getTotalSupply = async (contractAddress: string): Promise<number> => {
    const contract = await createContract(
      ERC20Abi as AbiItem[],
      contractAddress
    );

    return await contract.methods.totalSupply().call();
  };

  return {
    getTokenName,
    getTotalSupply
  };
};

export default useERC20;
