import React from "react";
import { Outlet } from "react-router-dom";

import authModel from "../Assets/auth-model.svg";
import logo from "../Assets/logo.png";
const AuthLayout = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row md:p-5 md:h-screen items-center">
      <div className="md:w-7/12   md:p-20 pt-10 md:pt-0 ">
        <div className="md:pt-12">
          <img src={logo} alt="logo" />
        </div>
        <div className="hidden md:block">
          <img src={authModel} alt="model" />
        </div>
      </div>
      <div className="w-full md:w-5/12 py-20  px-14 shadow-xl">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
