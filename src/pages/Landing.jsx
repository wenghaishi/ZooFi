import React from "react";
import Navbar from "../components/Navbar";
import Prices from "../components/Prices";

const Landing = () => {
  return (
    <div className="bg-[#F4F5F7] h-screen">
      <Navbar />
      <Prices />
    </div>
  );
};

export default Landing;
