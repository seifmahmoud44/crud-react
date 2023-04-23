import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signup } from "../store/addSlice";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const hanelSubmit = (e) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 100);
    const data = { email, password, id };
    dispatch(signup(data));
    setEmail("");
    setPassword("");
    navigate("/signin");
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
        Sign up
      </button>
    </form>
  );
};

export default Signup;
