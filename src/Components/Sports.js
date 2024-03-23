import React, { useEffect, useState } from "react";
import { YOUTUBE_SPORT_API } from "../utils/constant";
import { Link } from "react-router-dom";
import Catergorycard from "./Categorycard";

const Sports = () => {
  const [sport, setSport] = useState([]);

  useEffect(() => {
    getsportvideos();
  }, []);

  const getsportvideos = async () => {
    const data = await fetch(YOUTUBE_SPORT_API);
    const json = await data.json();
    setSport(json.items);
  };

  return (
    <div className=" grid grid-cols-4 pt-4">
      {sport.map((video) => (
        <Link to={"/watch?v=" + video.id} key={video.id}>
          <Catergorycard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default Sports;
