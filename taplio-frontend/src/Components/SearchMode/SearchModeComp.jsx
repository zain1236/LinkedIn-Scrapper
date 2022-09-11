import { Search } from "@mui/icons-material";
import React from "react";
import ViralCards from "../Viral/ViralCards";

const SearchModeComp = () => {
  return (
    <div className="flex flex-col items-center w-[80%] min-h-full px-32 mt-8">
      <div className="flex flex-col text-center">
        <span className="text-3xl font-semibold text-black">
          Search For any Post{" "}
        </span>
        <span className="text-sm text-slate-500 my-5">
          We use AI to analyze posts and match them with your search
        </span>
      </div>

      <div className=" w-[30vw] h-[50px] px-2 rounded-md bg-slate-100 border  flex items-center mt-10">
        <Search className="mr-2" />
        <input
          type="text"
          className="h-full w-full outline-none bg-slate-100 text-black font-medium"
        />
      </div>
      <div className="flex mt-10 ">
        <div className="badge bg-slate-200 text-black p-4 border-none font-medium mr-3 ">
          neutral
        </div>
        <div className="badge bg-slate-200 text-black p-4 border-none font-medium mr-3">
          growth marketing
        </div>
        <div className="badge bg-slate-200 text-black p-4 border-none font-medium mr-3">
          advertising
        </div>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 gap-3  ">
        <ViralCards />
        <ViralCards />
        <ViralCards />
        <ViralCards />
        <ViralCards />
      </div>
    </div>
  );
};

export default SearchModeComp;
