import { createSlice } from "@reduxjs/toolkit";

export const bagSlice = createSlice({
  name: "bag",
  initialState: {
    value: 0,
  },
  reducers: {
    addItem: (state) => {
      state.value += 1; // w/o curly braces An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft
    },
  },
});

export default bagSlice.reducer;
export const { addItem } = bagSlice.actions;
