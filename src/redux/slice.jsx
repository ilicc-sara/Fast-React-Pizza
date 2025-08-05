import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const nameSlice = createSlice({
  name: "fullName",
  initialState,
  reducers: {
    setName: (state, action) => {
      state = action.payload;
    },
  },
});

export const { setName } = nameSlice.actions;

export default nameSlice.reducer;
