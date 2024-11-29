import Icon from "../Icon/Icon";
import style from "./BadgesForCard.module.css";

export default function BadgesForCard({
  transmission,
  engine,
  kitchen,
  AC,
  TV,
}) {
  return (
    <ul className={style.badges}>
      {transmission && (
        <li className={style.item}>
          <Icon icon="diagram" width="20px" height="20px" />
          {transmission}
        </li>
      )}
      {engine && (
        <li className={style.item}>
          <Icon icon="engine" width="20px" height="20px" />
          {engine}
        </li>
      )}
      {kitchen && (
        <li className={style.item}>
          <Icon icon="kitchen" width="20px" height="20px" />
          Kitchen
        </li>
      )}
      {AC && (
        <li className={style.item}>
          <Icon icon="wind" width="20px" height="20px" />
          AC
        </li>
      )}
      {TV && (
        <li className={style.item}>
          <Icon icon="tv" width="20px" height="20px" />
          TV
        </li>
      )}
    </ul>
  );
}
