import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full text-white bg-black ">
      <Link to={"/login"} className="mr-12">
        Login
      </Link>
      <Link to={"/register"}>Register</Link>
    </div>
  );
};

export default Header;
