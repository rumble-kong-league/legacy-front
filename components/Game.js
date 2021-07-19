import React from "react";
import Image from "next/image";

const Game = () => (
  <div
    id="game"
    className="flex flex-col items-center justify-center px-5p text-white mb-8 mt-8"
  >
    <div className="w-12/12 md:w-10/12 flex flex-col justify-center flex-wrap">
      <div className=" flex flex-col justify-between" data-aos="fade">
        <h2 className="font-sans mb-3  text-3xl yl-400">The Game</h2>
        <div className="w-20 h-0.5 bg-yellow-400" />
        <h4 className="font-serif text-justify text-white text-sm md:text-2xl mt-8 mb-8">
          <div className="text-center mt-8 mb-8">
            <Image
              src="/assets/game/the-game-3.png"
              width={1084}
              height={838}
              alt="game-card"
            />
          </div>
          The core gameplay of the Rumble Kong League will evolve around
          exciting 3 versus 3 basketball matches, combining proven gameplay- and
          play-to-earn mechanics. Compete with and against other real users and
          their NFTs in various leagues and compete for a range of rewards and
          become the best of your class. In order to participate in Leagues,
          users will need to be members of Clubs, a separate layer of the
          ecosystem, giving users the chance to manage their own team and find
          the best possible kong synergies to be victorious.
          <div className="text-center mt-8 mb-8">
            <Image
              src="/assets/game/the-game-1.png"
              width={1303}
              height={671}
              alt="game-card"
            />
          </div>
          Making a game is easy. Making a good game is hard. This is why the
          initial drop of 10.000 Kongs will help fund the project, planned to be
          released later in 2021 globally. Kong owners will have a say in our
          roadmap, follow us on this journey, and be the first to get their
          hands on the game.
          <br />
          <br />
          The Kongs will always be at the heart of the Rumble Kong League, it is
          our vision to open the league up to other NFT Collections in the
          future, giving NFT interoperability a new meaning and offering new
          ways to use NFTs to anyone. We are already in discussion with multiple
          known NFT Collections, some of which will be announced in the coming
          weeks.
        </h4>
      </div>
      <div className="flex text-center justify-center xl:justify-between flex-wrap mb-12">
        <div
          className="mr-4 mb-4 mt-16"
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-anchor-placement="center-bottom"
        >
          <Image
            className="mx-auto"
            src="/assets/game/gamepad.png"
            alt="Game Image"
            width="250"
            height="250"
          />
          <div className="font-semibold my-2">PLAY</div>
          <p className="font-serif text-grayColor2 w-64 mx-auto text-justify">
            Manage your player and participate in exciting 3 versus 3 online
            matches with and against other Kong NFTs. You decide on the
            play-style and tactics of your Kong, making the most out of any
            given situation.
          </p>
        </div>

        <div
          className="mr-4 mb-4 mt-16"
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-anchor-placement="center-bottom"
        >
          <Image
            className="mx-auto"
            src="/assets/game/coin.png"
            alt="Game Image"
            width="250"
            height="250"
          />
          <div className="font-semibold my-2">EARN</div>
          <p className="font-serif text-grayColor2 w-64 mx-auto text-justify">
            Compete in various leagues and tournaments to win prizes and earn a
            living as a basketball player. Earn real money through prize-pools,
            sponsorships, advertising and other revenue streams, opening up a
            completely new way of gaming.
          </p>
        </div>

        <div
          className="mr-4 mb-4 mt-16"
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-anchor-placement="center-bottom"
        >
          <Image
            className="mx-auto"
            src="/assets/game/strategy.png"
            alt="Game Image"
            width="250"
            height="250"
          />
          <div className="font-semibold my-2">MANAGE</div>
          <p className="font-serif text-grayColor2 w-64 mx-auto text-justify">
            You can either create or join a basketball club and build the team
            of your dreams. Find other Kongs and make decisions on the best
            possible lineup of players to be victorious. Don’t want to manage
            yourself? No problem! Just join another club and become their MVP!
          </p>
        </div>

        <div
          className="mt-16"
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-anchor-placement="center-bottom"
        >
          <Image
            className="mx-auto"
            src="/assets/game/crown.png"
            alt="Game Image"
            width="250"
            height="250"
          />
          <div className="font-semibold my-2">DOMINATE</div>
          <p className="font-serif text-grayColor2 w-64 mx-auto text-justify">
            Once you found your dream club, and managed to get the most out of
            your Kong, it is up to you to perform, get those wins and get to the
            top of the Rumble Kong League. Make your own destiny and bring glory
            to your club!
          </p>
        </div>
      </div>
      {/* Large Game Image */}
      {/* <Image
        className="mx-auto"
        src="/assets/game/monkey2.png"
        alt="Game Image"
        width="1088"
        height="590"
        data-aos="fade"
      /> */}

      <div className="text-center mt-8 mb-8">
        <Image
          src="/assets/game/the-game-2.png"
          width={1276}
          height={700}
          alt="game-card"
        />
      </div>
    </div>
    {/* White Seperator */}
    <div
      className="w-10/12 h-0.5 bg-offwhite mt-12 mb-4 hidden 0xl:block"
      data-aos="fade"
    ></div>
  </div>
);
// ------------------------------------------------------------------------------------------------------- //

Game.displayName = "Game";
export default Game;
