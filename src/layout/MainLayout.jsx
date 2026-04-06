import React from "react";
import Navbar from "../components/Shared/Navbar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-20 px-4">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
