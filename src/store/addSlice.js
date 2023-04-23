import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  updateProduct: [],
  users: [],
  loggedIn: false,
  activeUser: null,
};

const addSlice = createSlice({
  name: "addSlice",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    deleteProduct: (state, action) => {
      const filterProducts = state.products.filter(
        (product) => product.id !== action.payload
      );
      state.products = filterProducts;
    },
    editProduct: (state, action) => {
      state.updateProduct = action.payload;
    },
    updateProduct: (state, action) => {
      state.products.map((product) => {
        if (product.id === action.payload.id) {
          product.title = action.payload.title;
          product.price = action.payload.price;
        }
        return product;
      });
    },

    //auth
    signup: (state, action) => {
      state.users.push(action.payload);
    },
    signin: (state, action) => {
      state.users.map((user) => {
        if (
          user.email === action.payload.email &&
          user.password === action.payload.password
        ) {
          state.loggedIn = true;
          state.activeUser = action.payload;
        } else {
          alert("You are not signed in");
        }
        return user;
      });
    },
    signout: (state, action) => {
      state.activeUser = null;
    },
  },
});

export default addSlice.reducer;
export const {
  addProduct,
  deleteProduct,
  editProduct,
  updateProduct,
  signup,
  signin,
  signout,
} = addSlice.actions;
