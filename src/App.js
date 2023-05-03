import React from "react";

import "./App.css";
import Blog from "./components/blog/Blog";
import Connect from "./components/connect/Connect";
import Contact from "./components/contact/Contact";
import Comment from "./components/comment/Comment";
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
      <Comment />
      <Footer />
    </div>
  );
};

export default App;
