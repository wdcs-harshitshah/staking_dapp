import React from "react";
import toast, { Toaster } from "react-hot-toast";
import merge from "lodash/merge";
import "@rainbow-me/rainbowkit";
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
  midnightTheme,
} from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";

const HOLESKY = process.env.NEXT_PUBLIC_HOLESKY_RPC_URL;
const EXPLORER = process.env.NEXT_PUBLIC_EXPLORER;
const CHAIN_ID = process.env.NEXT_PUBLIC_CHAIN_ID;
const CURRENCY = process.env.NEXT_PUBLIC_CURRENCY;
const DECIMALS = process.env.NEXT_PUBLIC_NETWORK_DECIMALS;
const NAME = process.env.NEXT_PUBLIC_STAKING_DAPP;
const NETWORK = process.env.NEXT_PUBLIC_NETWORK;

const App = () => {
  return <div>app</div>;
};

export default App;
