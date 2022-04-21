import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import logger from "redux-logger";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { mySliceContacts } from "./sliceContacts";
import { mySliceFilter } from "./sliceFilter";

const contacts = combineReducers({
  items: mySliceContacts.reducer,
  filter: mySliceFilter.reducer,
});

const persistConfig = {
  key: "contacts",
  storage,
  blacklist: ["filter"],
};

export const store = configureStore({
  reducer: persistReducer(persistConfig, contacts),

  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],
});

export const persistor = persistStore(store);
