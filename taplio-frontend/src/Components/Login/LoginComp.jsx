import { TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { LoginUser } from "../../Redux/User/action-creators";

const LoginComp = () => {
  const [cradentials, setCradentials] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(LoginUser(cradentials, navigate));
  };

  return (
    <div className="w-[400px] h-[500px] rounded-md bg-white p-10">
      <header className="flex flex-col w-full items-center">
        <img
          src="https://app.taplio.com/logo/Logo_Rec.png"
          alt=""
          className="w-[160px] mt-3"
        />
        <h2 className="text-2xl my-3">Welcome</h2>
        <span className="text-[14px]">
          Log in to Taplio to continue to Taplio.
        </span>
      </header>

      <form
        className="flex flex-col w-full mt-4 justify-between"
        onSubmit={handleSubmit}
      >
        <TextField
          id="outlined-basic"
          label="Email Address"
          variant="outlined"
          sx={{
            marginTop: "1rem",
            borderRadius: "16px",
          }}
          required
          onChange={(e) =>
            setCradentials({ ...cradentials, email: e.target.value })
          }
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
          required
          sx={{
            marginTop: "1rem",
          }}
          onChange={(e) =>
            setCradentials({ ...cradentials, password: e.target.value })
          }
        />
        <a href="/#" className="font-medium text-[13px] my-4 text-indigo-500">
          Forgot Password?
        </a>

        <button className="w-full bg-[#37a1d6] text-white font-medium rounded-md py-3 px-4">
          Continue
        </button>

        <span className=" text-[14px] mt-4">
          Don't have an Account?{" "}
          <Link to={"/register"} className="font-medium text-indigo-700">
            Sign up
          </Link>{" "}
        </span>
      </form>
    </div>
  );
};

export default LoginComp;
