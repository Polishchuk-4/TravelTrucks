import { useId } from "react";
import Icon from "../Icon/Icon";
import style from "./LocationFilterInput.module.css";

export default function LocationFilterInput({ value, onChange }) {
  const inputId = useId();

  return (
    <div className={style.locationContainer}>
      <label className={style.label} htmlFor={inputId}>
        Location
      </label>
      <div className={style.inputContainer}>
        <div className={style.icon}>
          <Icon icon="location" width="20px" height="20px" />
        </div>
        <input
          id={inputId}
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Kyiv, Ukraine"
          className={style.input}
        />
      </div>
    </div>
  );
}
