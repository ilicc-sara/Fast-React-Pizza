import { configureStore } from "@reduxjs/toolkit";
import nameReducer from "./slice";
import cartReducer from "./cartSlice";
import loadingReducer from "./loadingSlice";

export const store = configureStore({
  reducer: { name: nameReducer, cart: cartReducer, loading: loadingReducer },
});
