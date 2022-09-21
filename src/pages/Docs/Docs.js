import React from "react";
import { DOCS } from "../../assets/images/images";
import DocsMain from "../../components/DocsMain/DocsMain";
import Footer from "../../components/Footer/Footer";
import Head from "../../components/Head/Head";
import Navbar from "../../components/Navbar/Navbar";

const Docs = () => {
  return (
    <div>
      <Navbar />
      <Head
        h1="Docs"
        p="Learn how to work with the Loruki platform"
        img={DOCS}
      />
      <DocsMain />
      <Footer />
    </div>
  );
};

export default Docs;
