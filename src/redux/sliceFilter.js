import { createSlice } from "@reduxjs/toolkit";

export const FilterSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    changeFilter(state, action) {
      return (state = action.payload);
    },
    deleteSearchingContact(state, action) {
      return (state = action.payload);
    },
  },
});

export const { changeFilter, deleteSearchingContact } = FilterSlice.actions;
