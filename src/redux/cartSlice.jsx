import { createSlice } from "@reduxjs/toolkit";

const initialState = "cart";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {},
});

export default cartSlice.reducer;
