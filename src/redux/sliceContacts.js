import { createSlice } from "@reduxjs/toolkit";

export const mySliceContacts = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },
    removeContact(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addContact, removeContact } = mySliceContacts.actions;
