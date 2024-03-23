import React, { useEffect, useState } from "react";
import { YOUTUBE_MUSIC_API } from "../utils/constant";
import { Link } from "react-router-dom";
import Catergorycard from "./Categorycard";

const Music = () => {
  const [music, setMusic] = useState([]);

  useEffect(() => {
    getmusicvideos();
  }, []);

  const getmusicvideos = async () => {
    const data = await fetch(YOUTUBE_MUSIC_API);
    const json = await data.json();
    setMusic(json.items);
  };

  return (
    <div className=" grid grid-cols-4 pt-4">
      {music.map((video) => (
        <Link to={"/watch?v=" + video.id} key={video.id}>
          <Catergorycard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default Music;
