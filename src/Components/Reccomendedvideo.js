import React, { useEffect, useState } from "react";
import { YOUTUBE_RECCOMENDED_VIDEOS_API } from "../utils/constant";
import { Link } from "react-router-dom";
import Reccomendedvideocard from "./Reccomendedvideocard";

const Reccomendedvideo = () => {
  const [reccomendedvideo, setReccomendedvideo] = useState([]);

  useEffect(() => {
    getreccomendedvideos();
  }, []);

  const getreccomendedvideos = async () => {
    const data = await fetch(YOUTUBE_RECCOMENDED_VIDEOS_API);
    const json = await data.json();
    setReccomendedvideo(json.items);
  };

  return (
    <div className=" w-56">
      <h1 className=" pt-6 text-2xl py-2">Trending Videos</h1>
      <div className=" flex flex-col pb-4">
        {reccomendedvideo.map((video) => (
          <Link to={"/watch?v=" + video.id} key={video.id}>
            <Reccomendedvideocard info={video} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Reccomendedvideo;
