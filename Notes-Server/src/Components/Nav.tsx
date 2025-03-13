import React from "react";
import { NavLink } from "react-router";

const Nav = () => {
  return (
    <div className="flex w-[400px] justify-around">
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "p-4 bg-green-800 text-white rounded-lg hover:bg-black border-red-900 border-[5px]"
            : "p-4 bg-green-800 text-white rounded-lg hover:bg-black"
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({isActive})=> isActive ?"p-4 bg-green-800 text-white rounded-lg hover:bg-black border-red-900 border-[5px]" :"p-4 bg-green-800 text-white rounded-lg hover:bg-black" }
        to="/notes"
      >
        All Notes
      </NavLink>
    </div>
  );
};

export default Nav;
