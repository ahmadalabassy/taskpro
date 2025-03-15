import React, { useEffect, useState } from "react";
import { ToggleButton } from "react-bootstrap";

import styles from "./Timer.module.css";

export default function Timer() {
  const [checked, setChecked] = useState(true);
  const [clockIn, setClockIn] = useState("CLOCK IN");
  const [timeNow, setTimeNow] = useState("");

  const handleToggle = (e) => {
    setChecked(e.target.checked);
    setClockIn(checked ? "CLOCK OUT" : "CLOCK IN");
  };
  const handleToggleClick = () => {
    setChecked(!checked);
    setClockIn(checked ? "CLOCK OUT" : "CLOCK IN");
  };
  const dateNow = new Date(Date.now()) as Date;
  // convert to 24-hour format
  const hours = dateNow.getHours() % 12 || 12;
  const minutes = dateNow.getMinutes();
  const amPm = dateNow.getHours() >= 12 ? "PM" : "AM";
  // convert to 12-hour format
  const time = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;
  useEffect(() => {
    setInterval(() => {
      setTimeNow(
        new Date(Date.now()).toLocaleTimeString("en-US", { hour12: true })
      );
    }, 1000);
  }, [time, minutes, amPm]);

  return (
    <section className="section">
      <div className="position-relative d-none d-lg-flex">
        <p className={styles.time}>{time}</p>
        <p className="amPm">{amPm}</p>
      </div>
      <div className="clocking">
        <span
          className={styles.playButton}
          onClick={handleToggleClick}
        >{checked ? <i className="bi bi-play-circle"></i> : <i className="bi bi-stop-circle"></i>}</span>
        <ToggleButton
          id="toggle-check"
          type="checkbox"
          checked={checked}
          className={styles.timeToggle}
          value="1"
          onChange={handleToggle}
        >
          {clockIn}
        </ToggleButton>
      </div>
    </section>
  );
}
