import { createSlice } from "@reduxjs/toolkit";

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
      });
    },
  },
});

export const { setName, addToCart } = nameSlice.actions;

export default nameSlice.reducer;
