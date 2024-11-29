import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/campers/operation";

import style from "./CatalogPage.module.css";
import clsx from "clsx";

import FiltersSideBar from "../../components/FiltersSideBar/FiltersSideBar";
import TruckList from "../../components/TruckList/TruckList";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn";
import Loader from "../../components/Loader/Loader";

import {
  selectCampers,
  selectCurrentPage,
  selectError,
  selectIsLoading,
  selectTotalItems,
} from "../../redux/campers/selectors";

import { setCurrentPage } from "../../redux/campers/slice";
import { selectAllFilters } from "../../redux/filters/selectors";

const clsxMain = clsx("container", style.main);

export default function CatalogPage() {
  const dispatch = useDispatch();

  const currentPage = useSelector(selectCurrentPage);
  const isLoading = useSelector(selectIsLoading);
  const totalItems = useSelector(selectTotalItems);
  const isError = useSelector(selectError);

  const trucks = useSelector(selectCampers);

  const filters = useSelector(selectAllFilters);

  useEffect(() => {
    dispatch(fetchCampers({ page: currentPage, filters }));
  }, [dispatch, currentPage]);

  const handleLoadMore = () => {
    const nextPage = currentPage + 1;
    dispatch(setCurrentPage(nextPage));
  };

  return (
    <main className={clsxMain}>
      <FiltersSideBar />
      <div className={style.column}>
        {trucks && <TruckList trucks={trucks} />}
        {isError && <p>Please, choose else filters</p>}
        {isLoading && <Loader />}
        {totalItems > trucks.length && !isLoading && !isError && (
          <LoadMoreBtn onClick={handleLoadMore} />
        )}
      </div>
    </main>
  );
}
