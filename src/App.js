import React from "react";

import "./App.css";
import Blog from "./components/blog/Blog";
import Connect from "./components/connect/Connect";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import MainSection from "./components/heroSection/mainSection/MainSection";
import OurServices from "./components/ourServices/OurServices";
import Remark from "./components/remark/Remark";

const App = () => {
  return (
    <div>
      <MainSection />
      <OurServices />
      <Remark />
      <Connect />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
