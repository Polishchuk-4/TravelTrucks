import Button from "../../components/Button/Button";
import style from "./HomePage.module.css";
import clsx from "clsx";

import { useNavigate } from "react-router-dom";

const clsxMain = clsx("container", style.main);

export default function HomePage() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/catalog", { replace: true });
  };

  return (
    <main className={clsxMain}>
      <h1 className={style.title}>Campers of your dreams</h1>
      <h2 className={style["title-2"]}>
        You can find everything you want in our catalog
      </h2>
      <Button
        text="View Now"
        type="button"
        onClick={handleNavigate}
        view="simple"
      />
    </main>
  );
}
