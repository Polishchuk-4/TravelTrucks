import { createSlice } from "@reduxjs/toolkit";

const filtersInitialState = {
  location: "",
  vehicleEquipment: {
    AC: false,
    automatic: false,
    kitchen: false,
    TV: false,
    bathroom: false,
  },
  vehicleType: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    setLocation(state, action) {
      console.log(action.payload);
      state.location = action.payload;
    },
    setVehicleEquipment(state, action) {
      console.log(action.payload);
      state.vehicleEquipment = action.payload;
    },
    setVehicleType(state, action) {
      console.log(action.payload);
      state.vehicleType = action.payload;
    },
  },
});

export const { setLocation, setVehicleEquipment, setVehicleType } =
  filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
