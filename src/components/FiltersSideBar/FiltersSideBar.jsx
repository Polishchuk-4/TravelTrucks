import { useDispatch, useSelector } from "react-redux";
import style from "./FiltersSideBar.module.css";

import LocationFilterInput from "../LocationFilterInput/LocationFilterInput";
import VehicleEquipmentFiltersCheckbox from "../VehicleEquipmentFiltersCheckbox/VehicleEquipmentFiltersCheckbox";
import VehicleTypeFiltersRadio from "../VehicleTypeFiltersOption/VehicleTypeFiltersRadio";
import Button from "../Button/Button";

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
  const [isRequestMade, setIsRequestMade] = useState(false);

  const dispatch = useDispatch();

  const filters = useSelector(selectAllFilters);

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
    if (isFiltersActive) {
      dispatch(setCurrentPage(1));
      dispatch(fetchCampers({ page: 1, filters }));
      setIsRequestMade(true);
    } else {
      return;
    }
  };

  const handleResetFilters = () => {
    dispatch(resetFilters());
    if (isRequestMade) {
      dispatch(setCurrentPage(1));
      dispatch(fetchCampers({ page: 1 }));
      setIsRequestMade(false);
    }
  };

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
        <Button text="Search" type="button" onclick={searchFilteredItem} />
        {isFiltersActive && (
          <Button text="Reset" type="button" onclick={handleResetFilters} />
        )}
      </div>
    </aside>
  );
}
