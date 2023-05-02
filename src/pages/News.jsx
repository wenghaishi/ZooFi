import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import NewsCard from "../components/NewsCard";
import axios from "axios";

const News = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://cryptopanic.com/api/v1/posts/?auth_token=${import.meta.env.VITE_NEWS_API_KEY}&public=true`
        );
        const data = await response.json();
        console.log(data);
        setNewsData(data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-3 gap-4 m-4 h-screen">
        {data.map((data) => (
          <NewsCard key={data} data={data} />
        ))}
      </div>
    </div>
  );
};

export default News;
