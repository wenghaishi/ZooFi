import { useEffect, useState } from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import { ResponsiveContainer, AreaChart } from "recharts";
import axios from "axios";

const Chart = (props) => {
  const [graphData, setGraphData] = useState([]);

  const getCoinPrice = async () => {
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${props.id}/market_chart?vs_currency=usd&days=30&interval=daily`
      );
      setGraphData(
        response.data.prices.map((price, i) => ({ uv: price[1], name: i }))
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCoinPrice();
  }, []);

  return (
    <div className="flex justify-center">
      <ResponsiveContainer width="70%" height={400}>
        <LineChart
          data={graphData}
          margin={{ top: 70, right: 20, bottom: 5, left: 20 }}
        >
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis domain={["auto", "auto"]} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
