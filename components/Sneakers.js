import React from "react";
const { MerkleTree } = require("merkletreejs");
const keccak256 = require("keccak256");
import { useWeb3React } from "@web3-react/core";
import { ethers, utils } from "ethers";

const sneakers = require("./sneakers.json");

const sneakersAddress = "0x5180f2a553e76fac3cf019c8011711cf2b5c6035";

const abi = ["function redeem(address, uint256, uint256, bytes32[]) external"];

const hashToken = (account, tokenId, qty) => {
  return Buffer.from(
    utils
      .solidityKeccak256(
        ["address", "uint256", "uint256"],
        [account, tokenId, qty]
      )
      .slice(2),
    "hex"
  );
};

const getMerkleTree = () => {
  const leaves = Object.entries(sneakers).map((token) => {
    const account = token[0];
    const [tokenId, qty] = token[1].split("::");
    return hashToken(account, tokenId, qty);
  });
  const tree = new MerkleTree(leaves, keccak256, { sortPairs: true });
  return tree;
};

const Sneakers = () => {
  const context = useWeb3React();
  const { library, account } = context;

  const getSneakersContract = () => {
    if (!library) return null;
    if (!library.getSigner()) return null;
    return new ethers.Contract(sneakersAddress, abi, library.getSigner());
  };

  const claimSneakers = async () => {
    if (!account) {
      console.error("not connected wallet");
      return;
    }

    const contract = getSneakersContract();

    if (!contract) {
      console.error("contract not instantiated. connect wallet");
      return;
    }

    let entry = "";

    try {
      entry = sneakers[account];
    } catch (e) {
      console.error("not found in sneakers merkle drop");
      return;
    }

    const [tokenID, qty] = entry.split("::");
    const tree = getMerkleTree(account);
    const leaf = hashToken(account, tokenID, qty);
    const proof = tree.getProof(leaf);

    try {
      contract.redeem(
        account,
        tokenID,
        qty,
        proof.map((p) => `0x${p.data.toString("hex")}`)
      );
    } catch (e) {
      console.error("not eligible for the claimm");
    }
  };

  return (
    <div
      id="sneakers"
      className="flex flex-col items-center justify-center px-5p text-white mb-8 mt-8"
    >
      <div className="w-12/12 md:w-10/12 flex flex-col justify-center flex-wrap">
        <div className=" flex flex-col justify-between" data-aos="fade">
          <h2 className="font-sans mb-3  text-3xl yl-400">
            The Sneakers Airdrop
          </h2>
          <div className="w-20 h-0.5 bg-yellow-400" />
        </div>
      </div>
      <div>
        <p className="text-xl mt-8">
          A snapshot of all kong holders who are eligible for the sneaker drop
          will be taken on 06/08/2021 at 4 PM UTC
        </p>
      </div>
      {/* <div>
        <p className="text-2xl mt-4">Available to claim: 0</p>
      </div> */}
      <div>
        <button
          onClick={() => claimSneakers()}
          className="mt-8 h-14 text-2xl ml-2 mr-2 hover:bg-yellow-400 text-white-800 font-semibold py-2 px-4 border border-white-400 rounded shadow"
        >
          CLAIM
        </button>
      </div>
      <div
        className="w-10/12 h-0.5 bg-offwhite mt-12 mb-4 hidden 0xl:block"
        data-aos="fade"
      ></div>
    </div>
  );
};

Sneakers.displayName = "Sneakers";
export default Sneakers;
