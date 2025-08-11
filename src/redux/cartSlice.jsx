import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";

const initialState = [];

// const selectFirstTitle = (state) => state[0].title;
// const selectSecondTitle = (state) => state[1].title;
// const selectThirdTitle = (state) => state[2].title;

// const firstThreeTitles = createSelector(
//   [selectFirstTitle, selectSecondTitle, selectThirdTitle],
//   (a, b, c) => {
//     return `${a}, ${b} and ${c}`;
//   }
// );

const calculatePrice = (state) => {
  return state
    .reduce((acc, cur) => {
      return acc + cur.price * cur.amount;
    }, 0)
    .toFixed(2);
};

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
