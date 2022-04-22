import { createSlice, combineReducers } from "@reduxjs/toolkit";
import { FilterSlice } from "./sliceFilter";
// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

export const ContactsSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },
    deleteContact(state, action) {
      return state.contacts.filter((items) => items.id !== action.payload);
    },
  },
});

export const contacts = combineReducers({
  items: ContactsSlice.reducer,
  filter: FilterSlice.reducer,
});

// const persistConfig = {
//   key: "contacts",
//   storage,
// };
// export const persistedContactsReducer = persistReducer(
//   persistConfig,
//   ContactsSlice.reducer
// );

export const { addContact, deleteContact } = ContactsSlice.actions;
