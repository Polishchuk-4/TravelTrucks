import FiltersSideBar from "../../components/FiltersSideBar/FiltersSideBar";
import style from "./CatalogPage.module.css";
import clsx from "clsx";

const clsxMain = clsx("container", style.main);

export default function CatalogPage() {
  return (
    <main className={clsxMain}>
      <FiltersSideBar />
    </main>
  );
}
