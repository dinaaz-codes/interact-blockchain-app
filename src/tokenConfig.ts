export interface TokenConfig {
  [chainId: number]: { address:string};
}

export const TokenAddresses: TokenConfig = {
  1: {
    address: "0x514910771AF9Ca656af840dff83E8264EcF986CA",
  },
};
