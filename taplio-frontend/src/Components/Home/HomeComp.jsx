import React from "react";
import { Outlet } from "react-router-dom";

const HomeComp = () => {
  return (
    <>
      <div className="w-full min-h-full flex p-10 justify-center">
        <Outlet />
      </div>
    </>
  );
};

export default HomeComp;
