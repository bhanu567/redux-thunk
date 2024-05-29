import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cart";
import notificationReducer from "./ui";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    ui: notificationReducer,
  },
});

export default store;
