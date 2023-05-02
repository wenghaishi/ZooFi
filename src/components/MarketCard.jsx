import React from "react";
import { Link } from "react-router-dom";

const MarketCard = (props) => {
  return (
    <div>
      <div className="flex flex-row my-4 justify-evenly items-center">
        <Link to={`/market/${props.symbol}`} className="w-1/6 flex flex-row justify-between items-center">
          <h1 className="text-left">{props.name}</h1>
          <img src={props.img} alt="" className="h-8" />
        </Link>

        <h1 className="w-1/4 text-right">${props.price}</h1>
        <h1
          className={`w-1/4 text-right ${
            props.dayChange.toFixed(1) > 0 ? "text-green-700" : "text-red-700"
          }`}
        >
          {props.dayChange.toFixed(1)}%
        </h1>
      </div>
      <hr></hr>
    </div>
  );
};

export default MarketCard;
