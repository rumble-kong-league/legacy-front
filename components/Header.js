import React, { useState } from "react";
import Image from "next/image";
import { useWeb3React } from "@web3-react/core";
import { slide as Menu } from "react-burger-menu";

import Modal from "../components/Modal";

export const short = (s) => `${s.substr(0, 7)}...${s.substr(s.length - 3, 3)}`;

// Header Component
// ------------------------------------------------------------------------------------------------------- //
const Header = () => {
  const [open, setOpen] = useState(false);

  // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
  // const triedEager = useEagerConnect();

  // if (!context.active && !context.error) {
  //   return <Spinner />;
  // } else if (context.error) {
  //   return <div>Error..</div>;
  // } else {

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

  return (
    <>
      <Modal open={open} setOpen={setOpen} />

      <header
        className="bg-grayColor h-24 items-center text-whiteColor inline-flex justify-between md:justify-evenly w-full px-5p"
        data-aos="fade"
      >
        <Image
          src="/assets/header/logo.png"
          alt="RKL Logo"
          width="96"
          height="96"
        />

        {/* Navigation for Desktop */}
        <nav className="hidden md:inline-flex text-xs sm:text-sm md:text-base justify-evenly w-3/5 max-w-3/5 font-sans font-semibold flex-wrap 2xs:flex-nowrap">
          {/* <a
            className="px-2 xl:px-3 pt-1 inline-flex items-end hover:text-yellow-400"
            href="#mint"
          >
            MINT
          </a> */}
          <a
            className="px-2 xl:px-3 pt-1 inline-flex items-end hover:text-yellow-400"
            href="#game"
          >
            GAME
          </a>
          <a
            className="px-2 xl:px-3 pt-1 inline-flex items-end hover:text-yellow-400"
            href="#sneakers"
          >
            SNEAKERS
          </a>
          <a
            className="px-2 xl:px-3 pt-1 inline-flex items-end hover:text-yellow-400"
            href="#team"
          >
            TEAM
          </a>
          <a
            className="px-2 xl:px-3 pt-1 inline-flex items-end hover:text-yellow-400"
            href="#roadmap"
          >
            ROADMAP
          </a>
          <a
            className="px-2 xl:px-3 pt-1 inline-flex items-end hover:text-yellow-400"
            href="provenance"
          >
            PROVENANCE
          </a>
        </nav>

        {/* Social Links */}
        <div className="flex justify-center">
          <a
            className="mr-4"
            href="https://discord.gg/PVeQeRdXYT"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image
              src="/assets/footer/discord.jpg"
              alt="Discord"
              width="32"
              height="32"
            />
          </a>
          <a
            href="https://twitter.com/RumbleKongs"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image
              src="/assets/footer/twitter.png"
              alt="Twitter"
              width="32"
              height="32"
            />
          </a>
        </div>

        <div
          style={{ display: active ? "block" : "none" }}
          className="ml-2 mr-2"
        >
          {short(account ? account : "")}
        </div>

        <div
          onClick={() => setOpen(true)}
          style={{ display: active ? "none" : "block" }}
        >
          <button className="h-14 text-2xl ml-2 mr-2 hover:bg-yellow-400 text-white-800 font-semibold py-2 px-4 border border-white-400 rounded shadow">
            Connect
          </button>
        </div>

        {/* Navigation for Mobile */}
        <div className="md:hidden">
          <Menu right>
            <a
              className="px-2 xl:px-3 pt-1 inline-flex items-end hover:text-yellow-400"
              href="#about"
            >
              ABOUT
            </a>
            {/* <a
              className="px-2 xl:px-3 pt-1 inline-flex items-end hover:text-yellow-400"
              href="#mint"
            >
              MINT
            </a> */}
            <a
              className="px-2 xl:px-3 pt-1 inline-flex items-end hover:text-yellow-400"
              href="#game"
            >
              GAME
            </a>
            <a
              className="px-2 xl:px-3 pt-1 inline-flex items-end hover:text-yellow-400"
              href="#sneakers"
            >
              SNEAKERS
            </a>
            <a
              className="px-2 xl:px-3 pt-1 inline-flex items-end hover:text-yellow-400"
              href="#team"
            >
              TEAM
            </a>
            <a
              className="px-2 xl:px-3 pt-1 inline-flex items-end hover:text-yellow-400"
              href="#roadmap"
            >
              ROADMAP
            </a>
            <a
              className="px-2 xl:px-3 pt-1 inline-flex items-end hover:text-yellow-400"
              href="#provenance"
            >
              PROVENANCE
            </a>
          </Menu>
        </div>
      </header>
    </>
  );
};
// ------------------------------------------------------------------------------------------------------- //

Header.displayName = "Header";
export default Header;
