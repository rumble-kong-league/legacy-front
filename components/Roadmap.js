import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

// Roadmap Component
// ------------------------------------------------------------------------------------------------------- //
const Roadmap = () => (
  <div id="roadmap" className="">
    <div className="flex flex-col justify-between text-center" data-aos="fade">
      <h2 className="font-sans mb-2  text-3xl yl-400 mb-3">Roadmap</h2>
      <div className="w-20 h-0.5 bg-yellow-400  self-center mb-8"></div>
    </div>
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(255, 255, 255)" }}
        date="July 2021"
        iconStyle={{ background: "rgba(251, 191, 36, 1)", color: "#fff" }}
        // icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">Initial drop</h3>
        <p className="font-serif">
          Kongs can be minted and are being revealed to the world. There will
          only ever be 10.000 Kongs to play in the leagues.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(255, 255, 255)" }}
        date="August 2021"
        iconStyle={{ background: "rgba(251, 191, 36, 1)", color: "#fff" }}
        // icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Game Design Finalization
        </h3>
        <p className="font-serif">
          Whitepaper and game design has been shared with the community for
          feedback and is being defined based on feedback from Kong-Owners.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(255, 255, 255)" }}
        date="September 2021"
        iconStyle={{ background: "rgba(251, 191, 36, 1)", color: "#fff" }}
        // icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">Club Release</h3>
        <p className="font-serif">
          Clubs are being released, giving Kong-Owners the opportunity to create
          or join a limited set of clubs which will be participating in numerous
          leagues.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(255, 255, 255)" }}
        date="October 2021"
        iconStyle={{ background: "rgba(251, 191, 36, 1)", color: "#fff" }}
        // icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Game Prototype + Academy
        </h3>
        <p className="font-serif">
          According to previous milestones being met, a first playable prototype
          will be released to Kong-Owners, providing a first glimpse of the
          gameplay and what will be possible. Academies will be introduced to
          improve your Kong’s game performance.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(255, 255, 255)" }}
        date="Q4 2021 and Beyond"
        iconStyle={{ background: "rgba(251, 191, 36, 1)", color: "#fff" }}
        // icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">League Launch</h3>
        <p className="font-serif">
          The game core loop will be launched, opening up play-to-earn
          functionality as well as league features to all Kong and Club owners.
          Now is your chance to shine!
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>

    <br />

    <div className="flex flex-col items-center justify-center px-5p text-white">
      <div className="w-12/12 md:w-10/12 flex justify-center 0xl:justify-between flex-wrap">
        <h4 className="font-serif text-justify text-white text-sm md:text-2xl mt-8 mb-8">
          In addition to the above we will use part of the sale proceeds to
          support various charities, bringing sport closer to those who
          can&apos;t exercise themselves and help gorillas getting introduced
          back to nature. This is not a sales milestone for us, but something
          ongoing we are committed to.
          <br />
          <br />
          Beyond our existing roadmap, there are a lot of ideas floating around
          our heads. Below is roughly 1% of them.
          <br />
          <br />
          <ul>
            <li>
              🏀 Clubs can have players from other NFT Collections (imagine
              playing on the same team with an Ape or Punk)
            </li>
            <li>
              🏀 Animated player cards, showcasing your Kong’s attributes and
              performance
            </li>
            <li>🏀 Rumble Kong Arena inside The Sandbox</li>
            <li>
              🏀 Giving players the opportunity to host and run their own
              tournaments
            </li>
            <li>🏀 Transfer market to player trading</li>
            <li>
              🏀 ERC-20 token, introducing deep tokenemics as part of core game
              loop
            </li>
            <li>🏀 Player rentals</li>
          </ul>
        </h4>
      </div>
    </div>
  </div>
);
// ------------------------------------------------------------------------------------------------------- //

Roadmap.displayName = "Roadmap";
export default Roadmap;
