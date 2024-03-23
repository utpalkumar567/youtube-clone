import React from "react";
const Videocard = ({ info }) => {
  return (
    <div className=" pl-6 h-64 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105">
      <img
        className=" rounded-lg"
        alt="thumbnail"
        src={info.snippet.thumbnails.medium.url}
      />

      <p className=" font-medium truncate w-80">{info.snippet.title}</p>
      <div className="flex pt-2 gap-2">
        <div className=" flex gap-x-1 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>

          <p className=" truncate">{info.snippet.channelTitle}</p>
        </div>

        <p className=" truncate">{info.statistics.viewCount} Views</p>
      </div>
    </div>
  );
};

export default Videocard;
