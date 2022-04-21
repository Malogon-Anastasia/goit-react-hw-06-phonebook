import { createSlice } from "@reduxjs/toolkit";

export const mySliceFilter = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    changeFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const { changeFilter } = mySliceFilter.actions;
