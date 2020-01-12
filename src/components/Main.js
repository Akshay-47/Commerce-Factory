import React from "react";

import Header from "./Header";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import CartContainer from "./CartContainer";

const Main = () => {
  return (
    <div className="main">
      <Header />
      <div className="section-wrapper">
        <LeftSection />
        <RightSection />
      </div>
    </div>
  );
};
export default Main;
