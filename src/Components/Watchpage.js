import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/hamburgerslice";

const Watchpage = () => {
  const [searchParam] = useSearchParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  //fetch video information

  const [videoinfo, setVideoinfo] = useState();

  useEffect(() => {
    getvideoinfo();
  }, [searchParam.get("v")]);

  const getvideoinfo = async () => {
    const infodata = await fetch(
      "https://www.googleapis.com/youtube/v3/videos?part=snippet&id=" +
        searchParam.get("v") +
        "&key=AIzaSyDnAzckCSNSwygqOzXHYPEdXTdDbH4rF-Y"
    );

    const infojson = await infodata.json();
    setVideoinfo(infojson?.items[0]?.snippet);
  };

  return (
    <div className=" px-8 pt-8">
      <iframe
        width="1000"
        height="500"
        src={"https://www.youtube.com/embed/" + searchParam.get("v")}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
      <p className=" font-bold text-xl pt-4 w-[1000px]">{videoinfo?.title}</p>
      <div className=" flex gap-x-1 py-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
        <p className=" text-lg font-semibold pt-0.5">
          {videoinfo?.channelTitle}
        </p>
      </div>
      <p className=" w-[1000px] px-5 py-5 mb-5 bg-gray-100 rounded-lg whitespace-pre-line">
        {videoinfo?.description}
      </p>
    </div>
  );
};

export default Watchpage;
