import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, fetchCamperById } from "./operation";

const campersInitialState = {
  items: [],
  isLoading: false,
  error: false,
  totalItems: 0,
  currentPage: 1,
  camper: null,
};

const campersSlice = createSlice({
  name: "campers",
  initialState: campersInitialState,
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state, action) => {
        if (action.meta.arg.page === 1) {
          state.items = [];
        }
        state.error = false;
        state.isLoading = true;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
        state.totalItems = action.payload.total;

        if (action.meta.arg.page === 1) {
          state.items = action.payload.items;
        } else {
          state.items = [...state.items, ...action.payload.items];
        }
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchCamperById.pending, (state, action) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.camper = action.payload;
      })
      .addCase(fetchCamperById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const campersReducer = campersSlice.reducer;

export const { setCurrentPage } = campersSlice.actions;
