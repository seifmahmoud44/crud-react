import { configureStore } from "@reduxjs/toolkit";
import addSlice from "./addSlice";

const store = configureStore({
  reducer: addSlice,
});

export default store;
