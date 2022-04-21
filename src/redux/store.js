import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { contacts } from "./sliceContacts";

export const store = configureStore({
  reducer: {
    contacts,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger],
});
