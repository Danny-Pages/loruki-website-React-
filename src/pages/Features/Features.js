import React from "react";
import { SERVER } from "../../assets/images/images";
import Footer from "../../components/Footer/Footer";
import Head from "../../components/Head/Head";
import Main from "../../components/Main/Main";
import Navbar from "../../components/Navbar/Navbar";
import SubHead from "../../components/SubHead/SubHead";

const Features = () => {
  return (
    <div>
      <Navbar />
      <Head
        h1="Features"
        p="Check out the features of Loruki that separate us from the
            competition."
        img={SERVER}
      />
      <SubHead />
      <Main />
      <Footer />
    </div>
  );
};

export default Features;
