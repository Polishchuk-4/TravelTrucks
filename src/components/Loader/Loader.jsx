import { ThreeDots } from "react-loader-spinner";

import style from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={style.row}>
      <ThreeDots
        visible={true}
        height="96"
        width="96"
        color="#101828"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
