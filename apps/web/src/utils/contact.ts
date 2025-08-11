import { defineChain } from 'viem'

export const SomniaTestnet = defineChain({
    id: 50312,
    name: "Somnia Testnet",
    network: "Somnia Testnet",
    nativeCurrency: {
      decimals: 18,
      name: "Somnia",
      symbol: "STT",
    },
    rpcUrls: {
      default: {
        http: ["https://dream-rpc.somnia.network "],
      },
      public: {
        http: ["https://dream-rpc.somnia.network "],
      },
    },
    blockExplorers: {
      default: { name: "Block Explorer Url", url: "https://shannon-explorer.somnia.network/" },
    },
    testnet: true,
  });