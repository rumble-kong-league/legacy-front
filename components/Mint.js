import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import ProgressBar from "@ramonak/react-progress-bar";
import { useWeb3React } from "@web3-react/core";
import { ethers, utils } from "ethers";

import usePoller from "../components/usePoller";
import Notification from "../components/Notification";

const rklAddress = "0xef0182dc0574cd5874494a120750fd222fdb909a";

const abi = [
  "function mintKong(uint256 numberOfTokens) external payable",
  "function totalSupply() external view returns (uint256)",
];

const Mint = () => {
  const context = useWeb3React();
  const { library } = context;

  const [val, setVal] = useState("1");
  const [totalMint, setTotalMint] = useState(1840);
  const [showConnectWallet, setShowConnectWallet] = useState(false);
  const [showMintError, setShowMintError] = useState(false);

  const pullAndSetTotalSupply = useCallback(async () => {
    if (!library) return;
    const contract = getRklContractProvider();
    const totalSupply = await contract.totalSupply();
    setTotalMint(parseInt(totalSupply.toString()));
  }, [library]);

  usePoller(pullAndSetTotalSupply, 15_000);

  useEffect(() => {
    pullAndSetTotalSupply();
  }, [pullAndSetTotalSupply]);

  const handleChangeVal = useCallback((e) => {
    const num = e.target.value;
    let intNum = 0;
    try {
      intNum = parseInt(num);
      if (intNum > 20) {
        intNum = 20;
      } else if (intNum < 1) {
        intNum = 1;
      }
    } catch (e) {
      true;
    }
    setVal(intNum);
  }, []);

  const getRklContract = () => {
    if (!library) return null;
    if (!library.getSigner()) return null;
    return new ethers.Contract(rklAddress, abi, library.getSigner());
  };

  const getRklContractProvider = () => {
    if (!library) return null;
    if (!library.provider) return null;
    return new ethers.Contract(rklAddress, abi, library);
  };

  const mintKong = async () => {
    try {
      if (parseInt(val) > 20) {
        return;
      }
      if (parseInt(val) < 1) {
        return;
      }
    } catch (e) {
      setShowMintError(true);
      return;
    }

    const contract = getRklContract();

    if (!contract) {
      setShowConnectWallet(true);
      return;
    }

    try {
      const totalCost = val * 0.08;
      await contract.mintKong(String(val), {
        value: utils.parseUnits(String(totalCost), "ether"),
      });
    } catch (e) {
      setShowMintError(true);
    }
  };

  return (
    <>
      {showConnectWallet && (
        <Notification
          isSuccess={false}
          title={"Connect wallet!"}
          message={"Connect button is in the nav bar ⬆️"}
          show={showConnectWallet}
          setShow={setShowConnectWallet}
        />
      )}
      {showMintError && (
        <Notification
          isSuccess={false}
          title={"Something went wrong 💩!"}
          message={"Please, try again later."}
          show={showMintError}
          setShow={setShowMintError}
        />
      )}
      <div
        id="mint"
        className="flex flex-col items-center justify-center px-5p text-white"
      >
        <a
          href="https://discord.gg/PVeQeRdXYT"
          target="_blank"
          rel="noreferrer noopener"
        >
          <button className="h-14 mb-12 text-2xl hover:bg-yellow-400 text-white-800 font-semibold py-2 px-4 border border-white-400 rounded shadow">
            Join DISCORD
          </button>
        </a>

        <a
          className="mb-8 flex flex-row mt-2"
          href="https://opensea.io/collection/rumble-kong-league"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Image
            src="/assets/opensea.png"
            width={64}
            height={64}
            alt="opensea"
          />
          <div className="my-auto ml-4">Find us on <a className="hover:text-yellow-400">OpenSea</a></div>
        </a>

        <span className="text-2xl mb-12">
          Read our <a href="/assets/kongpaper.pdf" target="_blank" rel="noreferrer noopener" className="hover:text-yellow-400 cursor-pointer">Kongpaper</a>
        </span>

        {/* <h2 className="font-sans mb-3 text-3xl yl-400 mt-8">Mint Launchpad</h2>
        <div className="w-20 h-0.5 bg-yellow-400"></div> */}

        {/* <div className="md:w-10/12 w-12/12 mt-8 mb-8">
          {library && (
            <>
              <p className="text-sm mb-2">Minting progress</p>
              <div className="px-10">
                <ProgressBar completed={totalMint / 100.0} bgColor="#fabe24" />
              </div>
            </>
          )}

          <div
            style={{ minWidth: "300px" }}
            className="md:px-12 md:py-12 md:w-3/12 px-4 py-4 mx-auto w-12/12 mt-8 mb-4 border border-white-400 rounded shadow flex flex-col justify-center content-center"
          >
            <div className="flex flex-col mx-auto">
              <label htmlFor="qty" className="text-center">
                # of Kongs to mint
              </label>
              <input
                style={{ width: "100px" }}
                className="px-2 max-w-xs mb-6 text-black text-center mx-auto"
                type="number"
                min="1"
                max="20"
                id="qty"
                name="qty"
                placeholder="#"
                value={val}
                onChange={handleChangeVal}
                onFocus={handleChangeVal}
              />
              <p style={{ width: "220px" }} className="text-center">
                total mint cost:{" "}
                {parseInt(val) * 0.08 ? parseInt(val) * 0.08 : "?"} ETH
              </p>
              <button
                onClick={() => mintKong()}
                className="max-w-xs text-lg hover:bg-yellow-400 text-white-800 font-semibold border border-white-400 rounded shadow"
              >
                MINT
              </button>
            </div>
          </div>
        </div> */}

        <div className="w-10/12 h-0.5 bg-offwhite bg-yellow-400  hidden 0xl:block"></div>
        <div className="w-12/12 md:w-10/12 flex justify-center 0xl:justify-between flex-wrap">
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="font-sans mb-3 text-3xl yl-400 mt-8">
                Get Ready To Rumble
              </h2>
              <div className="w-20 h-0.5 bg-yellow-400"></div>

              <h4 className="font-serif text-justify text-white text-sm md:text-2xl mt-8 mb-8">
                Rumble Kong League is a competitive 3 vs 3 basketball
                experience, combining play-to-earn functionality with NFT
                Collection mechanics, enabling users to compete in engaging ways
                through NFTs. Launching with a set of unique 10.000 ERC-721
                tokens, called Kongs. Alongside a truly unique look, each Kong
                comes with a randomly generated set of attributes that can
                influence their performance in a match, providing additional
                depth and strategic elements.
                <div className="text-center mt-8 mb-8">
                  <Image
                    src="/assets/mint/girl-ape.jpeg"
                    width={500}
                    height={500}
                    alt="game-card"
                  />
                </div>
                Combining our strong vision, high-quality art, cutting-edge
                backend solutions, as well as a public and experienced team, it
                is our goal to give new use-cases to NFTs and disrupt the
                current landscape.
                <br />
                <br />
                Kongs will be released with a provenance that is computed and
                presented here on the website, without compromising the
                rarities, meaning no metadata leak is possible. This ensures a
                fair random generation of the Kongs. Permanence of the art is
                guaranteed, in addition to having your art live on IPFS, we have
                taken an extra measure to have it on Arweave, as well. Minting
                randomness is guaranteed via in-contract mechanisms.
              </h4>
            </div>
          </div>
        </div>
        <div className="w-10/12 h-0.5 bg-offwhite bg-yellow-400 hidden 0xl:block mb-8"></div>
        <div
          className="w-12/12 md:w-10/12"
          data-aos="fade-left"
          data-aos-delay="200"
          // data-aos-anchor-placement="center-bottom"
        >
          <div
            className="w-12/12 md:w-6/12"
            style={{ display: "inline-block" }}
          >
            <div>
              <h2 className="font-sans mb-3 text-3xl yl-400 mt-8">
                Commitment to Quality
              </h2>
              <div className="w-20 h-0.5 bg-yellow-400 "></div>
              <h4 className="font-serif text-justify text-white text-sm md:text-2xl mt-8 mb-8">
                Each Kong is assembled from a set of 100+ carefully hand-drawn
                traits, split into various categories. Out of over 45million
                possible combinations, 10.000 will be assembled through a
                programmatic approach, giving each Kong a distinct look. Our art
                is inspired by other monkey-based collections (You know who we
                are talking about), but it is our aim to give it our own twist
                through unique designs.
                <br />
                <br />
                Each of the traits has been hand-drawn by digital artist
                sickpencil, known for his unique art style and various
                high-quality NFT derivatives and standalone NFT pieces. Rumble
                Kongs are giving him the opportunity to express his creativity
                to the fullest, by combining everyday basketball traits with
                unique out-of-this-world designs. All the art is uploaded to
                IPFS and Arweave for permanence. In addition to that, owners
                will receive a complete commercial licence to any owned Kong.
              </h4>
            </div>
          </div>
          <div
            style={{ float: "right", textAlign: "right" }}
            className="w-12/12 md:w-5/12"
          >
            <Image
              src="/assets/quality/quality.png"
              width={500}
              height={500}
              alt="kong"
            />
          </div>
        </div>
        {/* White Seperator */}
        <div
          className="w-10/12 h-0.5 bg-offwhite hidden 0xl:block mb-8 mt-8"
          data-aos="fade"
        ></div>
      </div>
    </>
  );
};

Mint.displayName = "Mint";
export default Mint;
