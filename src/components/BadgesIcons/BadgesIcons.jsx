import Icon from "../Icon/Icon";
import style from "./BadgesIcons.module.css";

export default function BadgesIcons({
  transmission,
  engine,
  kitchen,
  AC,
  TV,
  radio,
  bathroom,
  refrigerator,
  microwave,
  gas,
  water,
}) {
  const badges = [
    { value: transmission, icon: "diagram", label: transmission },
    { value: engine, icon: "engine", label: engine },
    { value: kitchen, icon: "kitchen", label: "Kitchen" },
    { value: AC, icon: "wind", label: "AC" },
    { value: TV, icon: "tv", label: "TV" },
    { value: radio, icon: "radio", label: "Radio" },
    { value: bathroom, icon: "bathroom", label: "Bathroom" },
    { value: refrigerator, icon: "refrigerator", label: "Refrigerator" },
    { value: microwave, icon: "microwave", label: "Microwave" },
    { value: gas, icon: "gas", label: "Gas" },
    { value: water, icon: "water", label: "Water" },
  ];

  const filteredBadges = badges.filter((badge) => badge.value);

  return (
    <ul className={style.badges}>
      {filteredBadges.map((badge, index) => {
        return (
          <li key={index} className={style.badge}>
            <Icon icon={badge.icon} width="20px" height="20px" color="none" />
            {badge.label}
          </li>
        );
      })}
    </ul>
  );
}
