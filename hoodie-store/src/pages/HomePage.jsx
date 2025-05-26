import React from "react";
import Hero from "../components/Home/Hero";
import Categories from "../components/Home/Categories";
import Collection from "../components/Home/Collection";
import Collection2 from "../components/Home/Collection2";
import NewCollection from "../components/Home/NewCollection";
import SubscribeNewsLetter from "../components/Home/SubscribeNewsLetter";
import Marquee from "../components/Home/Marquee";
import SocialLinks from "../components/Home/SocialLinks";

const HomePage = () => {
  return (
    <div className="w-full">
      <Hero />
      <SocialLinks />
      <Marquee />
      <Categories />
      <Collection />
      <Collection2 />
      <NewCollection />
      <SubscribeNewsLetter />
    </div>
  );
};

export default HomePage;
