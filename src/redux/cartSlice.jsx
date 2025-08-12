import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const initialState = [];

export const priceSum = createSelector([(state) => state.cart], (cart) => {
  return cart
    .reduce((acc, cur) => {
      return acc + cur.price * cur.amount;
    }, 0)
    .toFixed(2);
});

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.push({
        title: action.payload.title,
        amount: 1,
        price: action.payload.price,
        id: action.payload.id,
      });
    },
    increaseAmount: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload.id);
      state[index].amount += 1;
    },
    decreaseAmount: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload.id);
      if (state[index].amount !== 1) {
        state[index].amount -= 1;
      } else
        return (state = state.filter((item) => item.id !== action.payload.id));
    },
    deleteCartItem: (state, action) => {
      return (state = state.filter((item) => item.id !== action.payload.id));
    },
    clearCart: (state) => {
      return (state = []);
    },
  },
});

export const {
  addToCart,
  increaseAmount,
  decreaseAmount,
  deleteCartItem,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
