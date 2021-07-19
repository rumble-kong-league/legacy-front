import React from "react";
import Image from "next/image";

// Team Component
// ------------------------------------------------------------------------------------------------------- //
const Team = () => (
  <div
    id="team"
    className="flex flex-col items-center justify-center px-5p text-white "
  >
    <div className="w-12/12 md:w-10/12 flex flex-col justify-center flex-wrap">
      {/* Game Content */}
      <div className=" flex flex-col justify-between" data-aos="fade">
        <h2 className="font-sans mb-3  text-3xl yl-400">The Team</h2>
        <div className="w-20 h-0.5 bg-yellow-400 self-start"></div>
        <h4 className="font-serif text-white text-sm md:text-2xl mt-8 mb-8">
          Meet the team bringing you the rumble. No anonymity, we have skin in
          the game to make this work.
        </h4>
      </div>

      <div className="flex text-center justify-center xl:justify-between flex-wrap">
        <div data-aos="fade-right" data-aos-delay="200">
          <Image
            className="mx-auto"
            src="/assets/team/direkkt.PNG"
            alt="Team Image"
            width="250"
            height="250"
          />
          <div className="font-sans text-2xl mt-6 yl-400">direkkt</div>
          <span className="text-white font-semibold text-sm w-64 mx-auto">
            Visionary
          </span>
          <div className="font-serif text-grayColor2 w-64 mx-auto text-justify">
            <span className="font-serif text-justify text-grayColor3 font-semibold text-xs">
              Marketing Director at The Sandbox with 10+ year experience working
              in the gaming industry (Activision Blizzard, Wargaming)
            </span>
          </div>

          <div className="flex mt-6 justify-center">
            <a
              href="https://twitter.com/direkkt"
              target="_blank"
              rel="noreferrer noopener"
              className="mb-4"
            >
              <Image
                src="/assets/team/twitter.png"
                alt="Twitter"
                width="24"
                height="24"
              />
            </a>
          </div>
        </div>

        <div className="mx-8 " data-aos="fade-right" data-aos-delay="200">
          <Image
            className="mx-auto"
            src="/assets/team/sickpencil.PNG"
            alt="Team Image"
            width="250"
            height="250"
          />
          <div className="font-sans text-2xl mt-6 yl-400">Sickpencil</div>
          <span className="text-white font-semibold text-sm w-64 mx-auto">
            Artist
          </span>
          <div className="font-serif text-grayColor2 w-64 mx-auto text-justify">
            <span className="font-serif text-justify text-grayColor3 font-semibold text-xs">
              Digital artist and creative mastermind known for his unique style
              and several popular derivatives across the NFT space
            </span>
          </div>

          <div className="flex mt-6 justify-center">
            <a
              href="https://twitter.com/sickpencil"
              target="_blank"
              rel="noreferrer noopener"
              className="mb-4"
            >
              <Image
                src="/assets/team/twitter.png"
                alt="Twitter"
                width="24"
                height="24"
              />
            </a>
          </div>
        </div>

        <div className="mx-8 " data-aos="fade-right" data-aos-delay="200">
          <Image
            className="mx-auto"
            src="/assets/team/naz.PNG"
            alt="Team Image"
            width="250"
            height="250"
          />
          <div className="font-sans text-2xl mt-6 yl-400">Naz</div>
          <span className="text-white font-semibold text-sm w-64 mx-auto">
            Tech
          </span>
          <div className="font-serif text-grayColor2 w-64 mx-auto text-justify">
            <span className="font-serif text-jusitfy text-grayColor3 font-semibold text-xs">
              reNFT tech co-founder, first peer-to-peer ERC-721 and ERC-1155
              lending / renting protocol
              <br />
              <br />
            </span>
          </div>

          <div className="flex mt-6 justify-center">
            <a
              href="https://twitter.com/AlgorithmicBot"
              target="_blank"
              rel="noreferrer noopener"
              className="mb-4"
            >
              <Image
                src="/assets/team/twitter.png"
                alt="Twitter"
                width="24"
                height="24"
              />
            </a>
          </div>
        </div>

        <div className="mx-8 " data-aos="fade-right" data-aos-delay="200">
          <Image
            className="mx-auto"
            src="/assets/team/nick.PNG"
            alt="Team Image"
            width="250"
            height="250"
          />
          <div className="font-sans text-2xl mt-6 yl-400">Nickev</div>
          <span className="text-white font-semibold text-sm w-64 mx-auto">
            Marketing
          </span>
          <div className="font-serif text-grayColor2 w-64 mx-auto text-justify">
            <span className="font-serif text-grayColor3 font-semibold text-xs text-justify">
              Marketing all-rounder and co-founder at reNFT as well as Marketing
              at The Sandbox
              <br />
              <br />
            </span>
          </div>

          <div className="flex mt-6 justify-center">
            <a
              href="https://twitter.com/nickev123"
              target="_blank"
              rel="noreferrer noopener"
              className="mb-4"
            >
              <Image
                src="/assets/team/twitter.png"
                alt="Twitter"
                width="24"
                height="24"
              />
            </a>
          </div>
        </div>
      </div>
    </div>

    <div
      className="w-10/12 h-0.5 bg-offwhite hidden 0xl:block mt-8 mb-8"
      data-aos="fade"
    ></div>
  </div>
);
// ------------------------------------------------------------------------------------------------------- //

Team.displayName = "Team";
export default Team;
