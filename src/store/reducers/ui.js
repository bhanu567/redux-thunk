import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isVisible: false,
  notification: {},
};

const notificationSlice = createSlice({
  name: "notification",
  initialState: initialState,
  reducers: {
    toggle(state, action) {
      state.isVisible = !state.isVisible;
    },
    sendingState(state, action) {
      state.notification = {
        status: "sending",
        title: "Sending...",
        message: "Sending cart data!",
      };
    },
    successState(state, action) {
      state.notification = {
        status: "success",
        title: "Success!",
        message: "Sent cart data successfully!",
      };
    },
    errorState(state, action) {
      state.notification = {
        status: "error",
        title: "Error!",
        message: "Sending cart data failed!",
      };
    },
  },
});

export const notifyActions = notificationSlice.actions;

export default notificationSlice.reducer;
