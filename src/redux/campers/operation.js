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
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
