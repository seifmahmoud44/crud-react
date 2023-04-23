import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { NavLink } from "react-router-dom";
import { signout } from "../store/addSlice";

const Navbar = () => {
  const state = useSelector((state) => state.activeUser);
  const dispatch = useDispatch();

  return (
    <div className="nav">
      <h1 className="logo">CRUD</h1>
      <div className="links">
        <NavLink to={"/"}>HOME</NavLink>
        {state && <NavLink to={"/add"}>ADD</NavLink>}
      </div>

      {state ? (
        <NavLink
          className="Sign-in "
          to={"/signin"}
          onClick={() => dispatch(signout())}
        >
          Sign out
        </NavLink>
      ) : (
        <NavLink className="Sign-in" to={"/signin"}>
          Sign in
        </NavLink>
      )}
    </div>
  );
};

export default Navbar;
