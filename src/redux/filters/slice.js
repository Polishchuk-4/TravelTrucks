import { createSlice } from "@reduxjs/toolkit";

export const filtersInitialState = {
  location: "",
  vehicleEquipment: {
    AC: false,
    transmission: "",
    kitchen: false,
    TV: false,
    bathroom: false,
  },
  form: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    setLocation(state, action) {
      state.location = action.payload;
    },
    setVehicleEquipment(state, action) {
      state.vehicleEquipment = action.payload;
    },
    setForm(state, action) {
      state.form = action.payload;
    },
    resetFilters(state) {
      state.location = "";
      state.vehicleEquipment = {
        AC: false,
        transmission: "",
        kitchen: false,
        TV: false,
        bathroom: false,
      };
      state.form = "";
    },
  },
});

export const { setLocation, setVehicleEquipment, setForm, resetFilters } =
  filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
