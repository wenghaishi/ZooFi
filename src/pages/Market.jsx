import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import MarketCard from "../components/MarketCard";
import MarketTopbar from "../components/MarketTopbar";

const Market = () => {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
        );
        setPrices(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPrices();
  }, []);
  return (
    <div className="text-center">
      <Navbar />
      <h1 className="text-xl my-6">Cryptocurrencies by Market Cap</h1>
      <MarketTopbar />
      <div>
        {prices.map((coin, i) => (
          <MarketCard key={i} price={coin.current_price} img={coin.image} name={coin.name} dayChange={coin.price_change_percentage_24h}/>
        ))}
      </div>
    </div>
  );
};

export default Market;
