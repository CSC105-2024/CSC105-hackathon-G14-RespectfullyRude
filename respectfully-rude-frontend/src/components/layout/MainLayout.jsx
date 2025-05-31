import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
