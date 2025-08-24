import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const initialState = { name: "" };

export const nameIsDefined = createSelector([(state) => state.name], (name) => {
  return name !== "";
});

const nameSlice = createSlice({
  name: "fullName",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload.name;
    },
  },
});

export const { setName } = nameSlice.actions;

export default nameSlice.reducer;
