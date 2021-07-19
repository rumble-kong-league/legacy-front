import React from "react";

// About Component
// ------------------------------------------------------------------------------------------------------- //
const About = () => (
  <div id="about" className="flex flex-col items-center px-2p py-2p mt-2 text-white">
    {/* About Content */}
    <div
      id="banner-desktop"
      className="mt-2 w-full h-30vmax"
      style={{
        backgroundImage: `url('/assets/about/rumble_banner.png')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% auto",
      }}
    />

    <div id="banner-mobile" className="md:hidden mt-2 w-full" style={{
        backgroundImage: `url('/assets/about/rumble_banner_mobile.png')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% auto",
      }} />

  </div>
);
// ------------------------------------------------------------------------------------------------------- //

About.displayName = "About";
export default About;
