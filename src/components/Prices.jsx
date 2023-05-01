import axios from "axios";
import { useEffect } from "react";

const Prices = () => {
  const getCryptoPrices = async () => {
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,binancecoin,xrp,cardano&vs_currencies=usd"
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCryptoPrices();
  }, []);

  return (
    <div>
      <h1>Prices</h1>
    </div>
  );
};

export default Prices;
