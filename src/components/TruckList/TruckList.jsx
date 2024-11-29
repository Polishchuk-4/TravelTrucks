import TruckCard from "../TruckCard/TruckCard";
import style from "./TruckList.module.css";

export default function TruckList({ trucks }) {
  return (
    <ul className={style.list}>
      {trucks.map((truck) => (
        <li key={truck.id}>
          <TruckCard truck={truck} />
        </li>
      ))}
    </ul>
  );
}
