import { useDispatch, useSelector } from "react-redux";
import style from "./FiltersSideBar.module.css";

import toast, { Toaster } from "react-hot-toast";

import LocationFilterInput from "../LocationFilterInput/LocationFilterInput";
import VehicleEquipmentFiltersCheckbox from "../VehicleEquipmentFiltersCheckbox/VehicleEquipmentFiltersCheckbox";
import VehicleTypeFiltersRadio from "../VehicleTypeFiltersOption/VehicleTypeFiltersRadio";
import Button from "../Button/Button";

import { filtersInitialState } from "../../redux/filters/slice";

import { selectAllFilters } from "../../redux/filters/selectors";

import {
  setLocation,
  setVehicleEquipment,
  setForm,
  resetFilters,
} from "../../redux/filters/slice";

import { fetchCampers } from "../../redux/campers/operation";
import { setCurrentPage } from "../../redux/campers/slice";
import { useState } from "react";

export default function FiltersSideBar() {
  const [prevFilters, setPrevFilters] = useState(filtersInitialState);
  const [isSearchMade, setIsSearchMade] = useState(false);

  const dispatch = useDispatch();

  const { _persist, ...filters } = useSelector(selectAllFilters);

  const isFiltersActive =
    filters.location ||
    filters.form ||
    Object.values(filters.vehicleEquipment).some((value) => value);

  const handleChangeLocation = (e) => {
    dispatch(setLocation(e.target.value));
  };

  const handleChangeVehicleEquipment = (e) => {
    const { name, checked } = e.target;

    if (name === "transmission") {
      dispatch(
        setVehicleEquipment({
          ...filters.vehicleEquipment,
          [name]: checked ? "automatic" : "",
        })
      );
    } else {
      dispatch(
        setVehicleEquipment({ ...filters.vehicleEquipment, [name]: checked })
      );
    }
  };

  const handleChangeVehicleType = (e) => {
    dispatch(setForm(e.target.value));
  };

  const searchFilteredItem = () => {
    if (JSON.stringify(filters) === JSON.stringify(prevFilters)) {
      toast("Please, choose else filter.", {
        icon: "ℹ️",
        duration: 1000,
      });
      return;
    } else {
      dispatch(setCurrentPage(1));
      dispatch(fetchCampers({ page: 1, filters }));
      setPrevFilters(filters);
      setIsSearchMade(true);
    }
  };

  const handleResetFilters = () => {
    if (isFiltersActive && isSearchMade) {
      dispatch(resetFilters());
      dispatch(setCurrentPage(1));
      dispatch(fetchCampers({ page: 1 }));
      setPrevFilters(filtersInitialState);
      setIsSearchMade(false);
    } else if (isFiltersActive) {
      dispatch(resetFilters());
    }
  };

  // reset filters after reload
  // useEffect(() => {
  //   return () => {
  //     dispatch(resetFilters());
  //   };
  // }, [dispatch]);

  return (
    <aside className={style.aside}>
      <LocationFilterInput
        value={filters.location}
        onChange={handleChangeLocation}
      />
      <VehicleEquipmentFiltersCheckbox
        valueVehicleEquipment={filters.vehicleEquipment}
        onChange={handleChangeVehicleEquipment}
      />
      <VehicleTypeFiltersRadio
        value={filters.form}
        onChange={handleChangeVehicleType}
      />
      <div className={style.rowBtn}>
        <Button
          text="Search"
          type="button"
          onClick={searchFilteredItem}
          view="simple"
        />
        {isFiltersActive && (
          <Button
            text="Reset"
            type="button"
            onClick={handleResetFilters}
            view="simple"
          />
        )}
      </div>
      <Toaster />
    </aside>
  );
}
