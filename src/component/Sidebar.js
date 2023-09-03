import React from "react";
import { useSelector } from "react-redux";
import { BiSolidHome } from "react-icons/bi";
import { RiYoutubeLine } from "react-icons/ri";
import { MdSubscriptions, MdOutlineVideoLibrary } from "react-icons/md";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) {
    return (
      <div className="p-2 shadow-lg w-20">
        <ul>
          <li className="p-5 flex font-bold ">
            <BiSolidHome />
          </li>
          <li className="p-5 flex font-bold ">
            <MdSubscriptions />
          </li>
          <li className="p-5 flex font-bold ">
            <MdOutlineVideoLibrary />
          </li>
          <li className="p-5 flex font-bold">
            <RiYoutubeLine />
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="p-10 shadow-lg w-48">
        <ul>
          <li className="p-5 flex font-bold ">
            <BiSolidHome />
            Home
          </li>
          <li className="p-5 flex font-bold ">Shorts</li>
          <li className="p-5 flex font-bold ">Subscription</li>
          <li className="font-bold">Subscription</li>
        </ul>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>News</li>
          <li>Movies</li>
        </ul>
        <h1 className="font-bold pt-5">Watch Later</h1>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>News</li>
          <li>Movies</li>
        </ul>
      </div>
    );
  }
};

export default Sidebar;
