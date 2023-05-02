import React from "react";
import Navbar from "../components/Navbar";
import NewsCard from "../components/NewsCard";

const News = () => {

  const data =[1,2,3,4,5,6,7,8,9]
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-3 gap-4 m-4 h-screen">
       {data.map((data) => (<NewsCard key={data} data={data}/>))}
      </div>
    </div>
  );
};

export default News;
