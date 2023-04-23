import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../store/addSlice";
import { useNavigate } from "react-router-dom";

const Edit = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const state = useSelector((state) => state.updateProduct);
  const id = useSelector((state) => state.updateProduct.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    setTitle(state.title);
    setPrice(state.price);
  }, [state]);
  const hanelSubmit = (e) => {
    e.preventDefault();
    const uData = { title, price, id };
    dispatch(updateProduct(uData));
    navigate("/");
    setTitle("");
    setPrice("");
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
        Update
      </button>
    </form>
  );
};

export default Edit;
