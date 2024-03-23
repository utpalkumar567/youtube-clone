import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.hamburger.isMenuOpen);

  if (!isMenuOpen) return null;
  return (
    <div className=" pl-6 h-screen sticky top-20">
      <div className=" border-b-2 border-gray-300">
        <ul>
          <li className=" font-bold py-1 cursor-pointer">
            <Link to="/"> Home </Link>
          </li>
          <li className=" font-bold py-1 cursor-pointer">Shorts</li>
          <li className=" font-bold py-1 cursor-pointer">Subscription</li>
        </ul>
      </div>
      <div>
        <h1 className=" font-bold pt-2">EXPLORE</h1>
        <ul>
          <li className=" font-semibold py-1 cursor-pointer ">
            <Link to="/music">Music</Link>
          </li>
          <li className=" font-semibold py-1 cursor-pointer ">
            <Link to="/gaming">Gaming</Link>
          </li>
          <li className=" font-semibold py-1 cursor-pointer ">
            <Link to="/sports">Sports</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
