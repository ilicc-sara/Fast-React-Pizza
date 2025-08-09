import { configureStore } from "@reduxjs/toolkit";
import nameReducer from "./slice";
import cartReducer from "./cartSlice";

export const store = configureStore({
  reducer: { name: nameReducer, cart: cartReducer },
});
