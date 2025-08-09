import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

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
  },
});

export const { addToCart, increaseAmount, decreaseAmount, deleteCartItem } =
  cartSlice.actions;

export default cartSlice.reducer;
