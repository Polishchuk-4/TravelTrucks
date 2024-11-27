import style from "./Button.module.css";

export default function Button({ text, type, onclick }) {
  return (
    <button className={style.btn} type={type} onClick={onclick}>
      {text}
    </button>
  );
}
