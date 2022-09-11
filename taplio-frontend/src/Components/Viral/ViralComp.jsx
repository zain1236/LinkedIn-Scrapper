import { Info } from "@mui/icons-material";
import { FormControl, InputLabel, NativeSelect, Tooltip } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ViralCards from "./ViralCards";
import { fetchPosts } from "../../Redux/Post/action-creators";
import Loading from "../../UI/Loader/Loading";

const ViralComp = () => {
  const [data, setData] = useState({
    keyword: "",
    time: "",
  });
  const viralPosts = useSelector((state) => state.Post.viralPost);
  const isLoading = useSelector((state) => state.Post.isLoading);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Submithandler = (e) => {
    e.preventDefault();
    dispatch(fetchPosts(data, navigate));
  };

  return (
    <div className="flex flex-col  w-[80%] min-h-full px-32 mt-8">
      <div className="w-full">
        <div className="w-full flex items-center  text-2xl text-black font-semibold">
          <span className="mr-4">Post Inspirations</span>
          <Tooltip
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        architecto totam mollitia vitae natus quia a voluptatibus!"
            arrow
            className=""
          >
            <Info />
          </Tooltip>
        </div>

        <p className="my-5">
          Use these high performing posts as Inspiration for your next content!
          Our AI engine selected this for you
        </p>
        <button className="underline">Edit my personalized feed</button>
        <form
          className="mt-10 w-full flex border-b pb-7"
          onSubmit={Submithandler}
        >
          <input
            required
            type="text"
            placeholder="Keyword"
            className="input bg-white text-slate-700 input-bordered w-full max-w-xs"
            onChange={(e) => setData({ ...data, keyword: e.target.value })}
          />

          <FormControl sx={{ marginLeft: "70px" }} required>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Time
            </InputLabel>
            <NativeSelect
              defaultValue={"DEFAULT"}
              required
              onChange={(e) => setData({ ...data, time: e.target.value })}
            >
              <option value={"DEFAULT"} disabled>
                -- Select --{" "}
              </option>

              <option value={"24H"}>24 Hours</option>
              <option value={"week"}>Week</option>
              <option value={"month"}>Month</option>
            </NativeSelect>
          </FormControl>

          <button className="btn btn-success text-white ml-auto no-animation hover:bg-green-500">
            Search
          </button>
        </form>

        <>
          {isLoading ? (
            <div className="w-full h-full flex justify-center items-center">
              <Loading />
            </div>
          ) : (
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 gap-3  ">
              {viralPosts?.map((p, i) => (
                <div key={i}>
                  <ViralCards
                    id={i}
                    author={p.Author}
                    likes={p.Likes}
                    date={p.Date}
                    avatar={p.Avatar}
                    post={p.Post}
                  />
                </div>
              ))}
            </div>
          )}
        </>
      </div>
    </div>
  );
};

export default ViralComp;
