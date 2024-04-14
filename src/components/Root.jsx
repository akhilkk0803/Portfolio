import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="min-h-screen bg-[#060417] ">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Root;
