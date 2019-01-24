import React from "react";
import HomeSlider from "../Components/Slider";
import PrimaryMenu from "../Components/PrimaryMenu";
import MinServices from "../Components/MinServices";
import WeAre from "../Components/WeAre";
import Footer from "../Components/Footer";
import HomeProducts from "../Components/HomeProducts";
import Client from "../Components/Clients";

const Home = () => {
  return (
    <div>
      <PrimaryMenu />
      <HomeSlider />
      <MinServices title="Services" subtitle="this is a subtitle"/>
      <WeAre /> 
      <HomeProducts/>
      <Client/>

      <Footer/>
    </div>
  );
};

export default Home;
