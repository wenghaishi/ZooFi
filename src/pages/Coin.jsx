import { useParams } from "react-router-dom";
import priceList from "../../markets.json";
import Navbar from "../components/Navbar";
import Chart from "../components/Chart";


const Coin = () => {
  const { id } = useParams();
  const coin = priceList.find((c) => c.symbol === id);
  const coinId = coin.id
  return (
    <div>
      <Navbar />
      <div className="w-full px-16 py-8 text-3xl bg-slate-100">
        <div className="flex flex-row items-center mb-1">
          <h1 className="bg-slate-300 h-8 w-8 mr-2 rounded-xl text-center font-semibold">
            {coin.market_cap_rank}
          </h1>
          <h1 className="font-semibold mr-2">{coin.name}</h1>
          <img src={coin.image} alt="" className="h-8" />
        </div>
        <div className="flex flex-row items-center">
          <h1 className="font-semibold mb-1 mr-4">
            {coin.current_price.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </h1>
          <h1
            className={`text-base ${
              coin.price_change_percentage_24h > 0
                ? "text-green-700"
                : "text-red-700"
            }`}
          >
            {coin.price_change_percentage_24h.toFixed(1)}%
          </h1>
        </div>

        <h2 className="text-lg mb-1">
          Market cap:{" "}
          {coin.market_cap.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 0,
          })}
        </h2>
        <h2 className="text-lg mb-1">
          FDV:{" "}
          {coin.fully_diluted_valuation.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 0,
          })}
        </h2>
        <h2 className="text-lg mb-1">
          Circulating supply:{" "}
          {coin.circulating_supply.toLocaleString(undefined, {
            maximumFractionDigits: 0,
          })}
        </h2>
        <h2 className="text-lg mb-1">
          Max supply:{" "}
          {coin.max_supply == null
            ? "None"
            : coin.max_supply.toLocaleString(undefined, {
                maximumFractionDigits: 0,
              })}
        </h2>
      </div>
      <Chart id={coinId}/>
    </div>
  );
};

export default Coin;
