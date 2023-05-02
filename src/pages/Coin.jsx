import { useParams } from "react-router-dom";
import priceList from "../../markets.json";
import Navbar from "../components/Navbar";

const Coin = () => {
  const { id } = useParams();
  const coin = priceList.find((c) => c.symbol === id);
  console.log(coin);
  return (
    <div>
      <Navbar />
      <h1>{coin.name}</h1>
      <p>{coin.current_price}</p>
    </div>
  );
};

export default Coin;
