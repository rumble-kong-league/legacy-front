import React from "react";
import Head from "next/head";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

import Header from "../components/Header";
import About from "../components/About";
import Mint from "../components/Mint";
import Game from "../components/Game";
import Team from "../components/Team";
import Roadmap from "../components/Roadmap";
import Footer from "../components/Footer";
import Sneakers from "../components/Sneakers";

const getLibrary = (provider) => {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
};

const Index = () => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Head>
        <link href="https://fonts.cdnfonts.com/css/strasua" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Serif&display=swap"
          rel="stylesheet"
        />
        <title>RUMBLE KONG LEAGUE</title>
      </Head>
      <Header />
      <About />
      <Mint />
      <Sneakers />
      <Game />
      <Team />
      <Roadmap />
      <Footer />
    </Web3ReactProvider>
  );
};

Index.displayName = "Index";
export default Index;
