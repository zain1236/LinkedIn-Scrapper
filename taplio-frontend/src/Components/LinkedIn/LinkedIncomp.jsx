/* eslint-disable jsx-a11y/anchor-is-valid */
import { TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LinkedIncomp = () => {
  const [cradentials, setCradentials] = useState({
    email: "",
    password: "",
  });
  const isLoading = useSelector((state) => state.User.isLoading);

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleSubmit = () => {
    const config = {
      headers: {
        "x-auth-token": token,
      },
    };

    axios
      .post(
        `${process.env.REACT_APP_API}/api/v1/linkedIn`,
        {
          LinkedInemail: cradentials.email,
          LinkedInPassword: cradentials.password,
        },
        config
      )
      .then(() => {
        toast.success("Successfully Connected!", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        navigate(-1);
      })
      .catch((d) => {
        toast.error(d.response.data.error, {
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
    <div className="w-[400px] h-[450px] bg-white shadow-lg rounded-md p-10 flex flex-col items-center">
      <span className="text-2xl text-center font-semibold text-black">
        Connect your LinkedIn Account
      </span>
      <div className="mt-10 h-full w-full flex flex-col">
        <TextField
          id="outlined-basic"
          label="Email or Phone"
          variant="outlined"
          sx={{
            width: "100%",
            marginTop: "1rem",
            borderRadius: "16px",
            borderColor: "blue",
          }}
          required
          type={"email"}
          className="w-full"
          onChange={(e) =>
            setCradentials({ ...cradentials, email: e.target.value })
          }
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          sx={{
            width: "100%",
            marginTop: "1rem",
            borderRadius: "16px",
            borderColor: "blue",
          }}
          required
          type={"password"}
          className="w-full"
          onChange={(e) =>
            setCradentials({ ...cradentials, password: e.target.value })
          }
        />
        <p className="mt-6 text-sm text-slate-500 ">
          <span className="text-red-600"> Note:</span> Your Login information
          isn't stored. Feel free to connect your account
        </p>
        <button
          onClick={handleSubmit}
          className={`btn ${
            isLoading && "loading"
          } bg-black  px-4 py-3 rounded-md no-animation w-full text-white font-semibold mt-auto `}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default LinkedIncomp;
