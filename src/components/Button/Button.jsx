import style from "./Button.module.css";
import clsx from "clsx";

export default function Button({ text, type, onClick, view }) {
  return (
    <button
      className={clsx(
        style.btn,
        view === "simple" ? style.simple : style.transparent
      )}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
