import BadgesIcons from "../BadgesIcons/BadgesIcons";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import style from "./CamperCard.module.css";
import { FaEuroSign } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

export default function CamperCard({ camper }) {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log(camper.id);
    navigate(`/catalog/${camper.id}`, { replace: true });
  };

  return (
    <div className={style.card}>
      <img src={camper.gallery[0].thumb} className={style.img} />
      <div className={style.body}>
        <div className={style.titleRow}>
          <div className={style.nameWithPrice}>
            <h2 className={style.title}>{camper.name}</h2>
            <p className={style.price}>
              <FaEuroSign />
              {camper.price}.00
            </p>
            <button className={style.favoriteBtn}>
              <Icon icon="heart" width="24px" height="26px" />
            </button>
          </div>
          <div className={style.ratingWithLocationRow}>
            <p className={style.rating}>
              <Icon icon="star" width="16px" height="16px" color="#FFC531" />
              <p className={style.ratingText}>
                {camper.rating} ({camper.reviews.length} Reviews)
              </p>
            </p>
            <p className={style.location}>
              <Icon icon="location" width="20px" height="20px" />
              {camper.location}
            </p>
          </div>
        </div>
        <p className={style.description}>{camper.description}</p>
        <BadgesIcons
          transmission={camper.transmission}
          engine={camper.engine}
          kitchen={camper.kitchen}
          AC={camper.AC}
          TV={camper.TV}
        />
        <Button
          type="button"
          onClick={handleClick}
          text="Show more"
          view="simple"
        />
      </div>
    </div>
  );
}
