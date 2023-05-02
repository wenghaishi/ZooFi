import React from "react";

const MarketTopbar = () => {
  return (
    <div className="flex flex-row my-4 justify-evenly sticky top-0 items-center bg-slate-100 h-16">
      <div className="w-1/6 flex flex-row justify-between items-center">
        <h1 className="text-left font-semibold">Name</h1>
        <img src="" alt="" className="h-8" />
      </div>
      <h1 className="w-1/4 text-right font-semibold">Price</h1>
      <h1 className="w-1/4 text-right font-semibold">Daily % change</h1>
    </div>
  );
};

export default MarketTopbar;
