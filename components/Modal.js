import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
// import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
// import { useEagerConnect, useInactiveListener } from "../hooks";
import {
  injected,
  network,
  walletconnect,
  walletlink,
  ledger,
  trezor,
  lattice,
  authereum,
  fortmatic,
} from "../connectors";

var ConnectorNames;
(function (ConnectorNames) {
  ConnectorNames["Injected"] = "Injected";
  ConnectorNames["Network"] = "Network";
  ConnectorNames["WalletConnect"] = "WalletConnect";
  ConnectorNames["WalletLink"] = "WalletLink";
  ConnectorNames["Ledger"] = "Ledger";
  ConnectorNames["Trezor"] = "Trezor";
  ConnectorNames["Lattice"] = "Lattice";
  ConnectorNames["Frame"] = "Frame";
  ConnectorNames["Authereum"] = "Authereum";
  ConnectorNames["Fortmatic"] = "Fortmatic";
  ConnectorNames["Magic"] = "Magic";
  ConnectorNames["Portis"] = "Portis";
  ConnectorNames["Torus"] = "Torus";
})(ConnectorNames || (ConnectorNames = {}));

const connectorsByName = {
  [ConnectorNames.Injected]: injected,
  [ConnectorNames.Network]: network,
  [ConnectorNames.WalletConnect]: walletconnect,
  [ConnectorNames.WalletLink]: walletlink,
  [ConnectorNames.Ledger]: ledger,
  [ConnectorNames.Trezor]: trezor,
  [ConnectorNames.Lattice]: lattice,
  [ConnectorNames.Authereum]: authereum,
  [ConnectorNames.Fortmatic]: fortmatic,
};

export default function Modal({ open, setOpen }) {
  const context = useWeb3React();
  const {
    connector,
    library,
    chainId,
    account,
    activate,
    deactivate,
    active,
    error,
  } = context;

  // handle logic to recognize the connector currently being activated
  const [activatingConnector, setActivatingConnector] = useState();

  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  if (active) {
    return <></>;
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed z-10 inset-0 overflow-y-auto"
        open={open}
        onClose={setOpen}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="text-black text-center inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-center overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-6xl sm:w-full sm:p-6">
              <div className="sm:grid sm:grid-cols-3 sm:gap-3 sm:grid-flow-row-dense">
                <button
                  onClick={() => {
                    setActivatingConnector(
                      connectorsByName[ConnectorNames.Injected]
                    );
                    activate(connectorsByName[ConnectorNames.Injected]);
                  }}
                  className="h-14 mb-12 text-2xl hover:bg-yellow-400 text-white-800 font-semibold py-2 px-4 border border-black rounded shadow"
                >
                  Metamask
                </button>
                <button
                  onClick={() => {
                    setActivatingConnector(
                      connectorsByName[ConnectorNames.WalletConnect]
                    );
                    activate(connectorsByName[ConnectorNames.WalletConnect]);
                  }}
                  className="h-14 mb-12 text-2xl hover:bg-yellow-400 text-white-800 font-semibold py-2 px-4 border border-black rounded shadow"
                >
                  WalletConnect
                </button>
                <button
                  onClick={() => {
                    setActivatingConnector(
                      connectorsByName[ConnectorNames.WalletLink]
                    );
                    activate(connectorsByName[ConnectorNames.WalletLink]);
                  }}
                  className="h-14 mb-12 text-2xl hover:bg-yellow-400 text-white-800 font-semibold py-2 px-4 border border-black rounded shadow"
                >
                  WalletLink
                </button>
                <button
                  onClick={() => {
                    setActivatingConnector(
                      connectorsByName[ConnectorNames.Ledger]
                    );
                    activate(connectorsByName[ConnectorNames.Ledger]);
                  }}
                  className="h-14 mb-12 text-2xl hover:bg-yellow-400 text-white-800 font-semibold py-2 px-4 border border-black rounded shadow"
                >
                  Ledger
                </button>
                <button
                  onClick={() => {
                    setActivatingConnector(
                      connectorsByName[ConnectorNames.Trezor]
                    );
                    activate(connectorsByName[ConnectorNames.Trezor]);
                  }}
                  className="h-14 mb-12 text-2xl hover:bg-yellow-400 text-white-800 font-semibold py-2 px-4 border border-black rounded shadow"
                >
                  Trezor
                </button>
                <button
                  onClick={() => {
                    setActivatingConnector(
                      connectorsByName[ConnectorNames.Lattice]
                    );
                    activate(connectorsByName[ConnectorNames.Lattice]);
                  }}
                  className="h-14 mb-12 text-2xl hover:bg-yellow-400 text-white-800 font-semibold py-2 px-4 border border-black rounded shadow"
                >
                  Lattice
                </button>
                <button
                  onClick={() => {
                    setActivatingConnector(
                      connectorsByName[ConnectorNames.Authereum]
                    );
                    activate(connectorsByName[ConnectorNames.Authereum]);
                  }}
                  className="h-14 mb-12 text-2xl hover:bg-yellow-400 text-white-800 font-semibold py-2 px-4 border border-black rounded shadow"
                >
                  Authereum
                </button>
                <button
                  onClick={() => {
                    setActivatingConnector(
                      connectorsByName[ConnectorNames.Fortmatic]
                    );
                    activate(connectorsByName[ConnectorNames.Fortmatic]);
                  }}
                  className="h-14 mb-12 text-2xl hover:bg-yellow-400 text-white-800 font-semibold py-2 px-4 border border-black rounded shadow"
                >
                  Fortmatic
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
