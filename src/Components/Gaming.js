import React, { useEffect, useState } from "react";
import { YOUTUBE_GAMING_API } from "../utils/constant";
import { Link } from "react-router-dom";
import Catergorycard from "./Categorycard";

const Gaming = () => {
  const [gaming, setGaming] = useState([]);

  useEffect(() => {
    getgamingvideos();
  }, []);

  const getgamingvideos = async () => {
    const data = await fetch(YOUTUBE_GAMING_API);
    const json = await data.json();
    setGaming(json.items);
  };

  return (
    <div className=" grid grid-cols-4 pt-4">
      {gaming.map((video) => (
        <Link to={"/watch?v=" + video.id} key={video.id}>
          <Catergorycard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default Gaming;
