import sprite from "../../../public/svg/sprite.svg";
import style from "./Icon.module.css";

const Icon = ({ icon, width = "24px", height = "24px", color = "black" }) => {
  return (
    <svg width={width} height={height} fill={color} className={style.icon}>
      <use href={`${sprite}#icon-${icon}`} />
    </svg>
  );
};

export default Icon;
