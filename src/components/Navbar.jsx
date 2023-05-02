import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-[#3872FF] flex flex-row h-16 justify-evenly items-center text-white">
      <Link to="/market" className="w-20 h-10  items-center justify-center flex hover:bg-[#2359e1] rounded-xl">Market</Link>
      <Link to="/news" className="w-20 h-10  items-center justify-center flex hover:bg-[#2359e1] rounded-xl">News</Link>
      <h1>Search</h1>
      <Link to="/portfolio" className="w-20 h-10  items-center justify-center flex hover:bg-[#2359e1] rounded-xl">Portfolio</Link>
    </div>
  );
};

export default Navbar;
