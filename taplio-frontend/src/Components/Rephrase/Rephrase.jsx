import { Close } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";

const Rephrase = ({ toggle, setToggle, post }) => {
  console.log(post);
  return (
    <div
      className={`w-[30%] bg-white fixed top-0 min-h-full shadow-2xl ease-in-out duration-200 p-10 ${
        toggle ? "right-0" : "-right-full"
      }`}
    >
      <h2 className="text-2xl text-black  font-semibold">Shedule Your Post.</h2>
      <div className="flex flex-col w-full h-full items-center mt-20">
        <textarea
          className="textarea text-black bg-white w-full border-2 border-slate-300"
          placeholder="Rephrasing..."
          rows={7}
          defaultValue={post}
        ></textarea>

        <div className="actions flex w-full justify-between mt-5 ">
          <button className="py-2 px-3 text-indigo-700 border-indigo-400 btn no-animation  bg-white hover:bg-indigo-50 hover:border-indigo-400">
            Post Now
          </button>
        </div>
      </div>
      <IconButton
        className="h-[60px] w-[60px] !bg-white !border-2 shadow-md"
        sx={{
          position: "absolute",
          bottom: "10px",
          right: "94%",
          backgroundColor: "#ccc",
        }}
        onClick={() => setToggle(false)}
      >
        <Close />
      </IconButton>
    </div>
  );
};

export default Rephrase;
