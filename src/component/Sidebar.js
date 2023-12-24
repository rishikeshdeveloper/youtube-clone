import React from "react";
import { useSelector } from "react-redux";
import { BiSolidHome } from "react-icons/bi";
import { RiYoutubeLine } from "react-icons/ri";
import { MdSubscriptions, MdOutlineVideoLibrary } from "react-icons/md";
import { Link } from "react-router-dom";

const Sidebar = () => {
  // const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

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
};

export default Sidebar;
