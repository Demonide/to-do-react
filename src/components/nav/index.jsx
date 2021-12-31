import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="flex">
    <NavLink to="/toDo" >
      ToDo
    </NavLink>
    <NavLink to="/login" >
      Login
    </NavLink>
    <NavLink to="/register" >
      Register
    </NavLink>
    </div>
  )
}

export default Nav;