import style from "./Logo.module.css";

import LogoUrl from "../../../public/image/Logo.png";

export default function Logo() {
  return (
    <div className={style.logo}>
      <img src={LogoUrl} />
    </div>
  );
}
