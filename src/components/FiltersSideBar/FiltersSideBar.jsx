import { useDispatch, useSelector } from "react-redux";
import LocationFilterInput from "../LocationFilterInput/LocationFilterInput";
import style from "./FiltersSideBar.module.css";
import {
  selectFiltersLocation,
  selectFiltersVehicleEquipment,
  selectFiltersVehicleType,
} from "../../redux/filters/selectors";
import {
  setLocation,
  setVehicleEquipment,
  setVehicleType,
} from "../../redux/filters/slice";
import VehicleEquipmentFiltersCheckbox from "../VehicleEquipmentFiltersCheckbox/VehicleEquipmentFiltersCheckbox";
import VehicleTypeFiltersOption from "../VehicleTypeFiltersOption/VehicleTypeFiltersRadio";
import Button from "../Button/Button";

export default function FiltersSideBar() {
  const dispatch = useDispatch();

  const filtersLocation = useSelector(selectFiltersLocation);
  const filtersVehicleEquipment = useSelector(selectFiltersVehicleEquipment);
  const filtersVehicleType = useSelector(selectFiltersVehicleType);

  console.log(filtersVehicleEquipment);

  const handleChangeLocation = (e) => {
    console.log(e.target.value);
    dispatch(setLocation(e.target.value));
  };

  const handleChangeVehicleEquipment = (e) => {
    console.log(e.target.name);
    const { name, checked } = e.target;
    dispatch(
      setVehicleEquipment({ ...filtersVehicleEquipment, [name]: checked })
    );
  };

  const handleChangeVehicleType = (e) => {
    dispatch(setVehicleType(e.target.value));
  };

  const handleFilteredItem = () => {};

  return (
    <aside className={style.aside}>
      <LocationFilterInput
        value={filtersLocation}
        onChange={handleChangeLocation}
      />
      <VehicleEquipmentFiltersCheckbox
        valueVehicleEquipment={filtersVehicleEquipment}
        onChange={handleChangeVehicleEquipment}
      />
      <VehicleTypeFiltersOption
        value={filtersVehicleType}
        onChange={handleChangeVehicleType}
      />
      <Button text="Search" type="button" onclick={handleFilteredItem} />
    </aside>
  );
}
