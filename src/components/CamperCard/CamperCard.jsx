import { useDispatch, useSelector } from "react-redux";
import BadgesIcons from "../BadgesIcons/BadgesIcons";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import style from "./CamperCard.module.css";
import { FaEuroSign } from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import { removeFavorite, addFavorite } from "../../redux/favorite/slice";
import { selectFavorite } from "../../redux/favorite/selectors";

export default function CamperCard({ camper }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const favorite = useSelector(selectFavorite);
  const isFavorite = favorite.some((favCamper) => favCamper.id === camper.id);

  const handleClick = () => {
    navigate(`/catalog/${camper.id}`, { replace: true });
  };

  const handleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(camper));
    } else {
      dispatch(addFavorite(camper));
      console.log("dd");
    }
  };
  console.log(favorite);

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
            <button className={style.favoriteBtn} onClick={handleFavorite}>
              <Icon
                icon="heart"
                width="24px"
                height="26px"
                color={isFavorite ? "#e44848" : "#101828"}
              />
            </button>
          </div>
          <div className={style.ratingWithLocationRow}>
            <p className={style.rating}>
              <Icon icon="star" width="16px" height="16px" color="#FFC531" />
              {camper.rating} ({camper.reviews.length} Reviews)
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
