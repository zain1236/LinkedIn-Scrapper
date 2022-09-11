import { SmartToy, Star, ThumbUp } from "@mui/icons-material";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import Rephrase from "../Rephrase/Rephrase";

const ViralCards = ({ date, author, likes, avatar, post, id }) => {
  const [toggleRephrase, settoggleRephrase] = useState();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [Rephrased, setRephrased] = useState();

  const handleSubmit = () => {
    data.numberOfResults = 0;
    data.phrase = post;
    setIsLoading(true);
    console.log(data);
    axios
      .post(`${process.env.REACT_APP_API}/rephrasing`, data)
      .then((d) => {
        setIsLoading(false);
        console.log(d.data);
        setRephrased(d.data.data);
        settoggleRephrase(true);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
        toast.error(err.response.data, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };
  return (
    <div className="bg-white shadow-md flex flex-col w-[350px] h-[450px] rounded-md border-[1px] my-2 place-self-center">
      <header className="flex w-full p-2 border-b-2 items-center">
        <div className="flex items-center ">
          <img
            className="object-contain mr-2 w-[50px] h-[50px]"
            src={avatar}
            alt=""
          />
        </div>
        <div className="ml-auto">
          <span className="date text-sm mr-2">{date}</span>

          <button className="bg-slate-200 p-1 rounded-md mr-3">
            <SmartToy />
          </button>
          <button className="bg-slate-200 p-1 rounded-md">
            <Star />
          </button>
        </div>
      </header>

      <div className="p-3 text-black">
        <div>
          {post.length > 550 ? (
            <>
              {post.slice(0, 400)}...{" "}
              <span className="font-semibold">Read More</span>
            </>
          ) : (
            post
          )}
        </div>
      </div>

      <footer className="w-full mt-auto p-3 flex items-center border-t-[1px]">
        <div className="flex items-center">
          <ThumbUp className="text-indigo-500 mr-2 " />
          <span>{likes}</span>
        </div>

        <div className="ml-auto my-2">
          <label
            for={`my-modal-${id}`}
            className=" border p-2 text-black rounded-md hover:bg-slate-100 ease-in-out duration-100"
          >
            Edit and Post
          </label>
        </div>

        <input type="checkbox" id={`my-modal-${id}`} className="modal-toggle" />
        <div className="modal">
          <div className="modal-box w-9/12 max-w-2xl bg-white">
            <h3 className="font-bold text-[16px] text-black">
              Rephrasing Config
            </h3>
            <div className="w-full h-full flex flex-col items-center mt-5 ">
              <div className="mt-5 flex flex-col w-full items-center text-black">
                <label htmlFor="" className="text-[16px]">
                  Select Tone
                </label>
                <select
                  className="select select-primary w-full max-w-xs bg-white text-black"
                  defaultValue={"DEFAULT"}
                  onChange={(e) => setData({ ...data, tone: e.target.value })}
                >
                  <option value={"DEFAULT"} disabled>
                    -- Select Tone --
                  </option>
                  <option value={"Generic"}>Generic</option>
                  <option value={"Casual"}>Casual</option>
                  <option value={"Humrous"}>Humrous</option>
                  <option value={"Professional"}>Professional</option>
                  <option value={"Convincing"}>Convincing</option>
                  <option value={"Inspirational"}>Inspirational</option>
                  <option value={"Critical"}>Critical</option>
                  <option value={"Inspirational"}>Inspirational</option>
                  <option value={"Informative"}>Informative</option>
                </select>
              </div>
              <div className="mt-5 flex flex-col w-full items-center text-black">
                <label htmlFor="" className="text-[16px]">
                  Rephrasing Length
                </label>
                <select
                  className="select select-primary w-full max-w-xs bg-white text-black"
                  defaultValue={"DEFAULT"}
                  onChange={(e) => setData({ ...data, length: e.target.value })}
                >
                  <option value={"DEFAULT"} disabled>
                    -- Select Length --
                  </option>
                  <option value={"short"}>Short</option>
                  <option value={"normal"}>Normal</option>
                  <option value={"long"}>Long</option>
                </select>
              </div>
            </div>
            <div className="modal-action">
              <label
                htmlFor={`my-modal-${id}`}
                className={`btn bg-white text-black hover:bg-white mr-3`}
              >
                Cancel
              </label>
              <label
                className={`btn ${isLoading && "loading"}`}
                onClick={handleSubmit}
              >
                Submit
              </label>
            </div>
          </div>
        </div>
      </footer>

      <Rephrase
        toggle={toggleRephrase}
        setToggle={settoggleRephrase}
        post={Rephrased}
      />
    </div>
  );
};

export default ViralCards;
