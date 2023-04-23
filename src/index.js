import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Roots from "./routs/Roots";
import Add from "../src/pages/Add";
import Signup from "../src/pages/Signup";
import Signin from "../src/pages/Signin";
import Index from "../src/pages/Index";
import Edit from "./pages/Edit";
import store from "./store/store";
import { Provider } from "react-redux";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "add",
        element: <Add />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "signin",
        element: <Signin />,
      },
      {
        path: "edit/:id",
        element: <Edit />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
