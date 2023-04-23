import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { addProduct } from "../store/addSlice";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const hanelSubmit = (e) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 100);

    const data = { title, price, id };
    dispatch(addProduct(data));

    setTitle("");
    setPrice("");
    navigate("/");
  };

  return (
    <form onSubmit={hanelSubmit}>
      <div className="email">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="email">
        <label htmlFor="price">Price</label>
        <input
          type="number"
          id="price"
          required
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <button className="Sign-in" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Add;
