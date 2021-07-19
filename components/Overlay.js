import React from "react";

// Overlay Component
// ------------------------------------------------------------------------------------------------------- //
const Overlay = () => (
  <div className="bg-yellow-400  0xl:mb-36 flex flex-col justify-between items-center text-center px-5p">
    {/* Overlay Content */}
    <h2 className="font-sans mb-3 text-7xl">HEADER</h2>
    <div className="w-20 h-0.5 bg-yellow-400  self-center"></div>
    <h4 className="font-sans text-grayColor2 text-2xl w-3/4 sm:w-1/2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.{" "}
    </h4>

    {/* Minted Count */}
    <div className="font-sans my-12 text-4xl">2.777 / 1000 Minted</div>

    {/* Buttons */}
    <div className="flex flex-wrap sm:flex-nowrap justify-center">
      <div className="flex">
        <div className="w-16 h-16 bg-white text-grayColor4 border border-2 border-gray-400 text-2xl flex justify-center items-center cursor-pointer">
          -
        </div>
        <div className="w-40 h-16 bg-white text-grayColor4 border border-2 border-gray-400 text-2xl flex justify-center items-center"></div>
        <div className="w-16 h-16 bg-white text-grayColor4 border border-2 border-gray-400 text-2xl flex justify-center items-center cursor-pointer">
          +
        </div>
      </div>

      <div className="mx-8  sm:mt-0 w-full text-center">
        <a href="#">
          <button className="yellow-button h-16 w-40 ml-8 text-2xl">
            MINT
          </button>
        </a>
      </div>
    </div>

    <h4 className="font-sans text-white text-2xl bg-yellow-400 w-3/4 sm:w-1/2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
    </h4>
  </div>
);
// ------------------------------------------------------------------------------------------------------- //

Overlay.displayName = "Overlay";
export default Overlay;
