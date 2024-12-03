import CamperCard from "../CamperCard/CamperCard";
import style from "./CamperList.module.css";

export default function CamperList({ campers }) {
  return (
    <ul className={style.list}>
      {campers.map((camper) => (
        <li key={camper.id}>
          <CamperCard camper={camper} />
        </li>
      ))}
    </ul>
  );
}
