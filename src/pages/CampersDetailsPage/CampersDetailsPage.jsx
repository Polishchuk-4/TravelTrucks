import { useEffect } from "react";
import style from "./CampersDetailsPage.module.css";
import clsx from "clsx";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { fetchCamperById } from "../../redux/campers/operation";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCamper,
  selectError,
  selectIsLoading,
} from "../../redux/campers/selectors";
import Loader from "../../components/Loader/Loader";
import Icon from "../../components/Icon/Icon";
import { FaEuroSign } from "react-icons/fa";
import ReservationCamperForm from "../../components/ReservationCamperForm/ReservationCamperForm";

const clsxMain = clsx("container", style.main);

const buildLinkClass = ({ isActive }) => {
  return clsx(style.link, isActive && style.active);
};

export default function CampersDetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const camper = useSelector(selectCamper);

  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [dispatch]);

  if (isLoading) {
    return (
      <main className={clsxMain}>
        <Loader />
      </main>
    );
  }

  return (
    <main className={clsxMain}>
      {error && <p>{error}</p>}
      {camper && (
        <>
          <div className={style.camperInfo}>
            <h2 className={style.title}>{camper.name}</h2>
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
            <p className={style.price}>
              <FaEuroSign />
              {camper.price}.00
            </p>
            <ul className={style.gallery}>
              {camper.gallery.map((img, index) => {
                return (
                  <li key={index}>
                    <img className={style.img} src={img.thumb} />
                  </li>
                );
              })}
            </ul>
            <p className={style.description}>{camper.description}</p>
          </div>
          <nav className={style.nav}>
            <NavLink to={`features`} className={buildLinkClass}>
              Features
            </NavLink>
            <NavLink to={`reviews`} className={buildLinkClass}>
              Reviews
            </NavLink>
          </nav>
          <div className={style.row}>
            <Outlet />
            <ReservationCamperForm />
          </div>
        </>
      )}
    </main>
  );
}
