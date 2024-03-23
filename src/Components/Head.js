import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toogleMenu } from "../utils/hamburgerslice";
import { YOUTUBE_SEARCH_API } from "../utils/constant";

const Head = () => {
  const dispatch = useDispatch();

  const toogleMenuHandler = () => {
    dispatch(toogleMenu());
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestion, setSearchSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestion(), 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSearchSuggestion(json[1]);
  };
  return (
    <div className="grid-flow-col grid p-5 w-auto sticky top-0 z-50 bg-white">
      <div className=" flex col-span-2">
        <img
          onClick={() => toogleMenuHandler()}
          className="h-7 mx-2 cursor-pointer"
          alt="menu"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png"
        />
        <a href="/">
          <img
            className="h-7"
            alt="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png"
          />
        </a>
      </div>
      <div className=" col-span-8 pl-52">
        <div>
          <input
            className=" w-2/4 py-1 px-3 border border-gray-300 rounded-l-full"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          ></input>
          <button className=" w-16 bg-gray-100 rounded-r-full py-1">
            Search
          </button>
        </div>
        {showSuggestion && (
          <div className="py-2 absolute bg-white w-[30rem] rounded-lg border border-gray-100">
            <ul>
              {searchSuggestion.map((s) => (
                <li className=" py-1 px-3 shadow-sm hover:bg-gray-100" key={s}>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="flex col-span-2">
        <img
          className="h-7"
          alt="user"
          src="https://cdn-icons-png.freepik.com/256/1077/1077114.png"
        />
      </div>
    </div>
  );
};

export default Head;
