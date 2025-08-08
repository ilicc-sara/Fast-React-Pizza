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
      const index = state.findIndex((item) => item.id === action.payload.id);
      state[index].amount += amount;
    },
  },
});

export const { setName, addToCart, increaseAmount } = nameSlice.actions;

export default nameSlice.reducer;
