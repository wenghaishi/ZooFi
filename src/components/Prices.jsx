import axios from "axios";
import { useState, useEffect } from "react";
import PriceCard from "./PriceCard";

const Prices = () => {
  const [prices, setPrices] = useState([]);
  const getCryptoPrices = async () => {
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,binancecoin,xrp,cardano&vs_currencies=usd"
      );
      setPrices(Object.entries(response.data));
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCryptoPrices();
  }, []);

  return (
    <div className="flex flex-row  justify-evenly gap-4 w-3/4 items-center mt-4 ml-4">
      {prices.map((coin, i) => (<PriceCard key={i} coinName={coin[0]} coinPrice={coin[1].usd}/>))}
    </div>
  );
};

export default Prices;
