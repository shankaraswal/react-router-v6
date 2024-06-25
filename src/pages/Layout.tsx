import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex flex-row gap-5 justify-center py-3  bg-teal-700 text-white w-full">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-yellow-200 font-bold" : "text-white"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-yellow-200 font-bold" : "text-white"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-yellow-200 font-bold" : "text-white"
          }
        >
          Contact
        </NavLink>
      </div>
      <div className="w-full max-w-5xl py-10 flex flex-col items-center justify-center bg-slate-200 px-10">
        <Outlet />
      </div>
    </div>
  );
};
