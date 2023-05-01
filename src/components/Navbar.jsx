import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-[#3872FF] flex flex-row h-16 justify-evenly items-center text-white">
      <Link to="/market">Market</Link>
      <h1>News</h1>
      <h1>Search</h1>
      <h1>Portfolio</h1>
    </div>
  );
};

export default Navbar;
