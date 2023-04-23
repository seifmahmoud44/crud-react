import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signin } from "../store/addSlice";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const date = { email, password };
  const loggedIn = useSelector((state) => state.loggedIn);
  const navigate = useNavigate();

  const hanelSubmit = (e) => {
    e.preventDefault();
    dispatch(signin(date));
    loggedIn && navigate("/");
    setEmail("");
    setPassword("");
  };
  return (
    <form onSubmit={hanelSubmit}>
      <div className="email">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="password">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="Sign-in" type="submit">
        Sign in
      </button>
      <p className="forget">
        forget password ? <Link to={"/signup"}>Sign up</Link>
      </p>
    </form>
  );
};

export default Signin;
