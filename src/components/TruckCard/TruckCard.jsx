import BadgesForCard from "../BadgesForCard/BadgesForCard";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import style from "./TruckCard.module.css";
import { FaEuroSign } from "react-icons/fa";

export default function TruckCard({ truck }) {
  const handleClick = () => {
    console.log(truck.id);
  };

  return (
    <div className={style.card}>
      <img src={truck.gallery[0].thumb} className={style.img} />
      <div className={style.body}>
        <div className={style.titleRow}>
          <div className={style.nameWithPrice}>
            <h2 className={style.title}>{truck.name}</h2>
            <p className={style.price}>
              <FaEuroSign />
              {truck.price}.00
            </p>
            <button className={style.favoriteBtn}>
              <Icon icon="heart" width="24px" height="26px" />
            </button>
          </div>
          <div className={style.ratingWithLocationRow}>
            <p className={style.rating}>
              <Icon icon="star" width="16px" height="16px" />
              {truck.rating} ({truck.reviews.length} Reviews)
            </p>
            <p className={style.location}>
              <Icon icon="location" width="20px" height="20px" />
              {truck.location}
            </p>
          </div>
        </div>
        <p className={style.description}>{truck.description}</p>
        <BadgesForCard
          transmission={truck.transmission}
          engine={truck.engine}
          kitchen={truck.kitchen}
          AC={truck.AC}
          TV={truck.TV}
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
