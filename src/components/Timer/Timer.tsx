import { useEffect, useState } from "react";
import { ToggleButton } from "react-bootstrap";

import styles from "./Timer.module.css";

export default function Timer() {
  const [checked, setChecked] = useState(true);
  const [clockIn, setClockIn] = useState("CLOCK IN");

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    setClockIn(e.target.checked ? "CLOCK OUT" : "CLOCK IN");
  };

  const handleToggleClick = () => {
    setChecked((prevChecked) => {
      const newChecked = !prevChecked;
      setClockIn(newChecked ? "CLOCK OUT" : "CLOCK IN");
      return newChecked;
    });
  };

  const dateNow = new Date(Date.now());
  // Convert to 12-hour format
  const hours = dateNow.getHours() % 12 || 12;
  const minutes = dateNow.getMinutes();
  const amPm = dateNow.getHours() >= 12 ? "PM" : "AM";
  const time = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;

  useEffect(() => {
    const interval = setInterval(() => {
      // Add any logic here if needed
    }, 1000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <section className={styles.ClockSection}>
      <div className="position-relative d-none d-lg-flex">
        <p className={styles.time}>{time}</p>
        <p className={styles.amPm}>{amPm}</p>
      </div>
      <div className={styles.clocking}>
        <span className={styles.playButton} onClick={handleToggleClick}>
          {checked ? (
            <i className={`bi bi-play-circle ${styles.playButton}`}></i>
          ) : (
            <i className={`bi bi-pause-circle ${styles.pauseButton}`}></i>
          )}
        </span>
        <ToggleButton
          id="toggle-check"
          type="checkbox"
          checked={checked}
          className={`d-none d-lg-flex ${
            checked ? styles.timeToggle : styles.timeTogglePause
          }`}
          value="1"
          onChange={handleToggle}
        >
          {clockIn}
        </ToggleButton>
      </div>
    </section>
  );
}
