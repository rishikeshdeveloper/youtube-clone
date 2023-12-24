import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { CiSearch } from "react-icons/ci";

import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggetion, setSuggetion] = useState([]);
  const [showSuggetion, setShowSuggetion] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggetion(searchCache[searchQuery]);
      } else {
        getSuggetions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSuggetions = async () => {
    const suggetions = await fetch(
      "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" +
        searchQuery
    );
    const json = await suggetions.json();
    setSuggetion(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu(true));
  };
  return (
    <div className="grid grid-flow-col p-5 shadow-lg">
      <div className="flex col-span-4">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-9 cursor-pointer"
          alt="menu"
          src="https://blog.hubspot.com/hs-fs/hubfs/What%20is%20a%20Hamburger%20Button.png?width=225&name=What%20is%20a%20Hamburger%20Button.png"
        />
        <img
          className="h-9 mx-3"
          alt="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/753px-Logo_of_YouTube_%282015-2017%29.svg.png"
        />
      </div>
      <div className="col-span-7 px-10">
        <input
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggetion(true)}
          onBlur={() => setShowSuggetion(false)}
          type="text"
          className="w-1/2 border-2 border-gray-30 p-2 rounded-l-full"
          name="Search"
          placeholder="serach"
        />
        <button className="border-2 border-gray-30 p-3 rounded-r-full">
          <CiSearch />
        </button>

        {showSuggetion && (
          <div className="fixed bg-white py-2 px-2 w-[30rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggetion.map((s) => {
                return <li>{s}</li>;
              })}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1 float-left">
        <img
          alt="mage"
          className="h-9 "
          src="https://cdn-icons-png.flaticon.com/512/552/552721.png"
        />
      </div>
    </div>
  );
};

export default Head;
