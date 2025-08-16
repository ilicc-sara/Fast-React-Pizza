import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";
import { createSelector } from "reselect";

const initialState = [];

export const priceSum = createSelector([(state) => state.cart], (cart) => {
  return cart
    .reduce((acc, cur) => {
      return acc + cur.unitPrice * cur.quantity;
    }, 0)
    .toFixed(2);
});

export const amountSum = createSelector([(state) => state.cart], (cart) => {
  return cart.reduce((acc, cur) => {
    return acc + cur.quantity;
  }, 0);
});

// {
//         title: action.payload.title,
//         amount: 1,
//         price: action.payload.price,
//         id: action.payload.id,
//       }

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.push({
        name: action.payload.title,
        pizzaId: action.payload.id,
        quantity: 1,
        unitPrice: action.payload.price,
        totalPrice: action.payload.price,
      });
    },
    increaseAmount: (state, action) => {
      const index = state.findIndex(
        (item) => item.pizzaId === action.payload.id
      );
      state[index].quantity += 1;
      state[index].totalPrice = state[index].quantity * state[index].unitPrice;
    },
    decreaseAmount: (state, action) => {
      const index = state.findIndex(
        (item) => item.pizzaId === action.payload.id
      );
      if (state[index].quantity !== 1) {
        state[index].quantity -= 1;
        state[index].totalPrice =
          state[index].quantity * state[index].unitPrice;
      } else
        return (state = state.filter(
          (item) => item.pizzaId !== action.payload.id
        ));
    },
    deleteCartItem: (state, action) => {
      return (state = state.filter(
        (item) => item.pizzaId !== action.payload.id
      ));
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
