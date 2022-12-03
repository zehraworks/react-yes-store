import { configureStore } from "@reduxjs/toolkit";
import bagReducer from "./bagSlice/bagSlice";

export const store = configureStore({
  reducer: {
    bag:bagReducer,
  },
});
