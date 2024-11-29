import style from "./VehicleTypeFiltersRadio.module.css";
import Icon from "../Icon/Icon";
import clsx from "clsx";

export default function VehicleTypeFiltersOption({ value, onChange }) {
  return (
    <div className={style.vehicleType}>
      <h3 className={style.title}>Vehicle Type</h3>
      <div className={style.radioContainer}>
        <label
          className={clsx(style.label, value === "panelTruck" && style.checked)}
        >
          <input
            type="radio"
            name="vehicleType"
            value="panelTruck"
            checked={value === "panelTruck"}
            onChange={onChange}
            className={style.input}
          />
          <Icon icon="van" />
          Van
        </label>
        <label className={clsx(style.label, value === "van" && style.checked)}>
          <input
            type="radio"
            name="vehicleType"
            value="fullyIntegrated"
            checked={value === "fullyIntegrated"}
            onChange={onChange}
            className={style.input}
          />
          <Icon icon="fullyIntegrated" />
          Fully Integrated
        </label>
        <label
          className={clsx(style.label, value === "alcove" && style.checked)}
        >
          <input
            type="radio"
            name="vehicleType"
            value="alcove"
            checked={value === "alcove"}
            onChange={onChange}
            className={style.input}
          />
          <Icon icon="alcove" />
          AC
        </label>
      </div>
    </div>
  );
}
