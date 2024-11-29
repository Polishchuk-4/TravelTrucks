import { configureStore } from "@reduxjs/toolkit";

import { filtersReducer } from "./filters/slice.js";
import { campersReducer } from "./campers/slice.js";

const store = configureStore({
  reducer: {
    filters: filtersReducer,
    campers: campersReducer,
  },
});

export default store;
