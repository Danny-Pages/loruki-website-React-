import React from "react";
import Footer from "../../components/Footer/Footer";
import HeroSection from "../../components/HeroSection/HeroSection";
import Navbar from "../../components/Navbar/Navbar";
import Stats from "../../components/Stats/Stats";
import Cli from "../../components/Cli/Cli";
import Cloud from "../../components/Cloud/Cloud";
import Languages from "../../components/Languages/Languages";

import "../../assets/styles/animations.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Stats />
      <Cli />
      <Cloud />
      <Languages />
      <Footer />
    </div>
  );
};

export default Home;
