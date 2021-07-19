import { InjectedConnector } from "@web3-react/injected-connector";
import { NetworkConnector } from "@web3-react/network-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { LedgerConnector } from "@web3-react/ledger-connector";
import { TrezorConnector } from "@web3-react/trezor-connector";
import { LatticeConnector } from "@web3-react/lattice-connector";
import { AuthereumConnector } from "@web3-react/authereum-connector";
import { FortmaticConnector } from "@web3-react/fortmatic-connector";

const POLLING_INTERVAL = 12000;
const RPC_URLS = {
  1: `https://mainnet.infura.io/v3/${process.env.INFURA_API}`,
};

export const injected = new InjectedConnector({
  supportedChainIds: [1],
});

export const network = new NetworkConnector({
  urls: { 1: RPC_URLS[1] },
  defaultChainId: 1,
});

export const walletconnect = new WalletConnectConnector({
  rpc: { 1: RPC_URLS[1] },
  qrcode: true,
  pollingInterval: POLLING_INTERVAL,
});

export const walletlink = new WalletLinkConnector({
  url: RPC_URLS[1],
  appName: "RumbleKongLeague",
  supportedChainIds: [1],
});

export const ledger = new LedgerConnector({
  chainId: 1,
  url: RPC_URLS[1],
  pollingInterval: POLLING_INTERVAL,
});

export const trezor = new TrezorConnector({
  chainId: 1,
  url: RPC_URLS[1],
  pollingInterval: POLLING_INTERVAL,
  // manifestEmail: "dummy@abc.xyz",
  // manifestAppUrl: "http://localhost:1234",
});

export const lattice = new LatticeConnector({
  chainId: 1,
  appName: "RumbleKongLeague",
  url: RPC_URLS[1],
});

export const authereum = new AuthereumConnector({ chainId: 1 });

export const fortmatic = new FortmaticConnector({
  apiKey: process.env.FORTMATIC_API,
  chainId: 1,
});
