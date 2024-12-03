import { useSelector } from "react-redux";
import style from "./CamperFeatures.module.css";
import { selectCamper } from "../../redux/campers/selectors";
import BadgesIcons from "../BadgesIcons/BadgesIcons";

export default function CamperFeatures() {
  const camper = useSelector(selectCamper);
  return (
    <div className={style.features}>
      <BadgesIcons
        transmission={camper.transmission}
        engine={camper.engine}
        kitchen={camper.kitchen}
        AC={camper.AC}
        TV={camper.TV}
        radio={camper.radio}
        refrigerator={camper.refrigerator}
        bathroom={camper.bathroom}
        microwave={camper.microwave}
        gas={camper.gas}
        water={camper.water}
      />
      <div className={style.propertyContainer}>
        <h3 className={style.title}>Vehicle details</h3>
        <hr className={style.line} />
        <ul className={style.details}>
          <li className={style.detailsItem}>
            <p className={style.property}>Form</p>
            <p className={style.propertyItem}>{camper.form}</p>
          </li>
          <li className={style.detailsItem}>
            <p className={style.property}>Length</p>
            <p className={style.propertyItem}>{camper.length}</p>
          </li>
          <li className={style.detailsItem}>
            <p className={style.property}>Width</p>
            <p className={style.propertyItem}>{camper.width}</p>
          </li>
          <li className={style.detailsItem}>
            <p className={style.property}>Height</p>
            <p className={style.propertyItem}>{camper.height}</p>
          </li>
          <li className={style.detailsItem}>
            <p className={style.property}>Tank</p>
            <p className={style.propertyItem}>{camper.tank}</p>
          </li>
          <li className={style.detailsItem}>
            <p className={style.property}>Consumption</p>
            <p className={style.propertyItem}>{camper.consumption}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
