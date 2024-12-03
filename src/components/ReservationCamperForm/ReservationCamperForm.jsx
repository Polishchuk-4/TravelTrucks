import { useState } from "react";
import Button from "../Button/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import style from "./ReservationCamperForm.module.css";
import toast, { Toaster } from "react-hot-toast";
import clsx from "clsx";

export default function ReservationCamperForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState(null);
  const [comment, setComment] = useState("");
  const handlerSubmit = (event) => {
    event.preventDefault();
    setName("");
    setEmail("");
    setDate("");
    setComment("");
    toast.success("Successful camper booking!");
  };

  return (
    <form className={style.form} onSubmit={handlerSubmit}>
      <Toaster />
      <h3 className={style.title}>Book your campervan now</h3>
      <p className={style.text}>
        Stay connected! We are always ready to help you.
      </p>
      <div className={style.inputs}>
        <input
          type="text"
          placeholder="Name*"
          className={style.input}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email*"
          className={style.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label className={style.dataPickerContainer}>
          <DatePicker
            selected={date}
            className={clsx(style.input, style.datePicker)}
            onChange={(newValue) => setDate(newValue)}
            dateFormat="MM/DD/YYYY"
            placeholderText="Booking date*"
            required
          />
        </label>
        <textarea
          placeholder="Comment"
          className={clsx(style.input, style.textarea)}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
      </div>
      <Button type="submit" view="simple" text="Send" />
    </form>
  );
}
