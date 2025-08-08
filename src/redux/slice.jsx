import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = { name: "", cart: [] };

const nameSlice = createSlice({
  name: "fullName",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload.name;
    },
    addToCart: (state, action) => {
      state.cart.push({
        title: action.payload.title,
        amount: 1,
        price: action.payload.price,
        id: action.payload.id,
      });
    },
    increaseAmount: (state, action) => {
      //  const index = state.findIndex((toDo) => toDo.id === action.payload.id);
      // state[index].completed = action.payload.completed;
      const index = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      state.cart[index].amount += 1;
    },
    decreaseAmount: (state, action) => {
      const index = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      // state.cart[index].amount -= 1;
      if (state.cart[index].amount !== 1) {
        state.cart[index].amount -= 1;
      } else state.cart[index].amount = state.cart[index].amount;
    },
    deleteCartItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const {
  setName,
  addToCart,
  increaseAmount,
  decreaseAmount,
  deleteCartItem,
} = nameSlice.actions;

export default nameSlice.reducer;
