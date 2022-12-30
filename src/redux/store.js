import { configureStore } from "@reduxjs/toolkit";
import bagReducer from "./bagSlice/bagSlice";
import auth from "./auth/auth";

export const store = configureStore({
  reducer: {
    bag: bagReducer,
    auth,
  },
});
