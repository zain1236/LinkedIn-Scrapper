import { Create } from "@mui/icons-material";
import React from "react";

const QueueComp = () => {
  return (
    <div className="flex flex-col w-[80%]  h-full px-32">
      <div className="flex w-full items-center">
        <span className="text-xl text-black font-semibold">My Feed</span>
        <div className="ml-auto">
          <button className="btn mt-9 no-animation text-white bg-[#2f5081] hover:bg-[#2764c0] border-none">
            {" "}
            <Create className="mr-2" /> Add Post
          </button>
        </div>
      </div>

      <span className="text-slate-600 font-medium mt-5">
        You don't have any sheduled posts
      </span>

      <div className="w-full h-[70%] flex flex-col justify-center items-center font-semibold text black">
        <span>
          You haven't defined a queue Shedule yet. Hit the button below to do
          so.
        </span>
        <button className="btn mt-9 no-animation text-white bg-[#2f5081] hover:bg-[#2764c0] border-none">
          {" "}
          <Create className="mr-2" /> Add Post
        </button>
      </div>
    </div>
  );
};

export default QueueComp;
