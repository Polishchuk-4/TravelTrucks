import { createAsyncThunk } from "@reduxjs/toolkit";
import { campersApi } from "../../config/campersApi";

export const fetchCampers = createAsyncThunk(
  "campers/fetchCampers",
  async ({ page, filters, limit = 4 }, thunkAPI) => {
    try {
      const { data } = await campersApi.get(`/campers`, {
        params: {
          page,
          limit,
          ...(filters?.location && { location: filters.location }),
          ...(filters?.vehicleEquipment?.AC && { AC: true }),
          ...(filters?.vehicleEquipment?.transmission === "automatic" && {
            transmission: "automatic",
          }),
          ...(filters?.vehicleEquipment?.kitchen && {
            kitchen: true,
          }),
          ...(filters?.vehicleEquipment?.TV && {
            TV: true,
          }),
          ...(filters?.vehicleEquipment?.bathroom && {
            bathroom: true,
          }),
          ...(filters?.form && {
            form: filters.form,
          }),
        },
      });

      return data;
    } catch (error) {
      if (error.response) {
        if (error.response.status === 404) {
          return thunkAPI.rejectWithValue(
            "No results found for the given filters."
          );
        }
        return thunkAPI.rejectWithValue(
          "Server error. Please try again later."
        );
      } else if (error.request) {
        return thunkAPI.rejectWithValue(
          "Network error. Please check your connection."
        );
      } else {
        return thunkAPI.rejectWithValue(
          "An unexpected error occurred: " + error.message
        );
      }
    }
  }
);
