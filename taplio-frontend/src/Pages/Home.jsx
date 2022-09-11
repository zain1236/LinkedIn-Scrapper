import React from "react";
import HomeComp from "../Components/Home/HomeComp";
import Sidebar from "../Components/Sidebar";

const Home = () => {
  return (
    <>
      <div className="w-full min-h-full bg-white  flex">
        <Sidebar />
        <HomeComp />
      </div>
    </>
  );
};

export default Home;
