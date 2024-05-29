import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isShow: false,
  items: [],
  totalItemsInCart: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItems(state, action) {
      let items = state.items;
      let itemIndex = items.findIndex(
        (item) => item["pID"] === action.payload.pID
      );
      if (itemIndex === -1) {
        items.push({
          ...action.payload,
          quantity: 1,
          total: action.payload.price,
        });
      } else {
        items[itemIndex].quantity += 1;
        items[itemIndex].total += items[itemIndex].price;
      }
      state.items = items;
      state.totalItemsInCart += 1;
    },
    displayCart(state, action) {
      state.isShow = !state.isShow;
    },
    increaseItems(state, action) {
      let items = state.items;
      let itemIndex = items.findIndex((item) => item.pID === action.payload);
      items[itemIndex].quantity += 1;
      items[itemIndex].total += items[itemIndex].price;
      state.items = items;
      state.totalItemsInCart += 1;
    },
    removeItem(state, action) {
      let items = state.items;
      let itemIndex = items.findIndex((item) => item["pID"] === action.payload);
      if (items[itemIndex].quantity > 1) {
        items[itemIndex].quantity -= 1;
        items[itemIndex].total -= items[itemIndex].price;
      } else {
        items = items.filter((item) => item.pID !== action.payload);
      }
      state.items = items;
      state.totalItemsInCart -= 1;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
