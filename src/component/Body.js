import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="">
      <Outlet />
      <Sidebar />
    </div>
  );
};

export default Body;
