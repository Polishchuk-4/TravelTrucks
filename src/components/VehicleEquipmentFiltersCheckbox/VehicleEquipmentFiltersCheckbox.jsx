import clsx from "clsx";
import style from "./VehicleEquipmentFiltersCheckbox.module.css";
import Icon from "../Icon/Icon";

export default function VehicleEquipmentFiltersCheckbox({
  valueVehicleEquipment,
  onChange,
}) {
  return (
    <div className={style.vehicleEquipment}>
      <h3 className={style.title}>Vehicle Equipment</h3>
      <div className={style.checkboxesContainer}>
        <label
          className={clsx(
            style.label,
            valueVehicleEquipment.AC && style.checked
          )}
        >
          <input
            type="checkbox"
            name="AC"
            onChange={onChange}
            checked={valueVehicleEquipment.AC}
            className={style.input}
          />
          <Icon icon="wind" />
          AC
        </label>

        <label
          className={clsx(
            style.label,
            valueVehicleEquipment.AC && style.checked
          )}
        >
          <input
            type="checkbox"
            name="automatic"
            onChange={onChange}
            checked={valueVehicleEquipment.automatic}
            className={style.input}
          />
          <Icon icon="diagram" />
          Automatic
        </label>

        <label
          className={clsx(
            style.label,
            valueVehicleEquipment.AC && style.checked
          )}
        >
          <input
            type="checkbox"
            name="kitchen"
            onChange={onChange}
            checked={valueVehicleEquipment.Kitchen}
            className={style.input}
          />
          <Icon icon="kitchen" />
          Kitchen
        </label>

        <label
          className={clsx(
            style.label,
            valueVehicleEquipment.AC && style.checked
          )}
        >
          <input
            type="checkbox"
            name="TV"
            onChange={onChange}
            checked={valueVehicleEquipment.TV}
            className={style.input}
          />
          <Icon icon="tv" />
          TV
        </label>

        <label
          className={clsx(
            style.label,
            valueVehicleEquipment.AC && style.checked
          )}
        >
          <input
            type="checkbox"
            name="bathroom"
            onChange={onChange}
            checked={valueVehicleEquipment.bathroom}
            className={style.input}
          />
          <Icon icon="bathroom" width="20px" height="20px" />
          Bathroom
        </label>
      </div>
    </div>
  );
}
