import { useSelector } from "react-redux";
import style from "./CamperReviews.module.css";

import { selectCamper } from "../../redux/campers/selectors";

import Icon from "../Icon/Icon";

export default function CamperReviews() {
  const { reviews } = useSelector(selectCamper);

  const createRating = (rating, totalStar = 5) => {
    const stars = [];
    for (let i = 1; i <= totalStar; i++) {
      stars.push(
        <li key={i} className={style.ratingItem}>
          <Icon
            width="16px"
            height="16px"
            icon="star"
            color={rating >= i ? "#FFC531" : "#F2F4F7"}
          />
        </li>
      );
    }
    return <ul className={style.rating}>{stars}</ul>;
  };

  return (
    <ul className={style.reviews}>
      {reviews.map((review, index) => {
        return (
          <li key={index} className={style.reviewContainer}>
            <div className={style.person}>
              <div className={style.avatar}>{review.reviewer_name[0]}</div>
              <div className={style.column}>
                <h4 className={style.name}>{review.reviewer_name}</h4>
                {createRating(review.reviewer_rating)}
              </div>
            </div>
            <p className={style.comment}>{review.comment}</p>
          </li>
        );
      })}
    </ul>
  );
}
