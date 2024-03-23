import React from "react";
import Watchpage from "./Watchpage";
import Reccomendedvideo from "./Reccomendedvideo";

const Watchpageconatiner = () => {
  return (
    <div className=" flex">
      <Watchpage />
      <Reccomendedvideo />
    </div>
  );
};

export default Watchpageconatiner;
