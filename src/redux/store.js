import { configureStore } from "@reduxjs/toolkit";

import { filtersReducer } from "./filters/slice.js";
import { campersReducer } from "./campers/slice.js";

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

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whiteList: ["filters"],
};

const persistedReducer = persistReducer(persistConfig, filtersReducer);

export const store = configureStore({
  reducer: {
    filters: persistedReducer,
    campers: campersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
