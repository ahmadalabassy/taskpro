import React, { useEffect, useState } from "react";
import { ToggleButton } from "react-bootstrap";
import styled from "styled-components";
import play from "../../assets/play-circle.svg";
import stop from "../../assets/stop-circle.svg";

const Toggle = styled(ToggleButton)`
  background-color: var(--secondary-color) !important;
  padding: 0px !important;
  border: none !important;
  color: var(--primary-color) !important;
  margin: 0px !important;
  font-weight: bold;
  text-align: left;
  transition: all 0.3s ease;
  &:hover {
    color: #0b72f9 !important;
    transform: scale(1.05);
  }
  &:focus {
    outline: none;
  }
  @media screen and (max-width: 991px) {
    display: none;
  }
`;
const Time = styled.span`
  font-size: 24px;
  font-weight: 600;
  color: var(--text-header-color);
  margin-right: 16px;
  font-family: "Space Mono", serif;
`;
const AmOrPm = styled.span`
  font-size: 10px;
  font-weight: bolder;
  color: var(--text-header-color);
  position: absolute;
  left: 74px;
  top: 6px;
`;
const Section = styled.section`
  padding: 4px 13px;
  background-color: var(--secondary-color);
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  min-width: 240px;
  @media screen and (max-width: 991px) {
    padding: 10px 0;
    background-color: #fff;
    min-width: auto !important;
  }
`;
const DivSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-left: 16px;
  justify-content: left;
  gap: 5px;
`;
export default function Timer() {
  const [checked, setChecked] = useState(true);
  const [clockIn, setClockIn] = useState("CLOCK IN");
  const [Isplay, setPlay] = useState(play);
  const [timeNow, setTimeNow] = useState("");

  const handleToggle = (e) => {
    setChecked(e.target.checked);
    setClockIn(checked ? "CLOCK OUT" : "CLOCK IN");
    setPlay(checked ? stop : play);
  };
  const handleToggleClick = () => {
    setChecked(!checked);
    setClockIn(checked ? "CLOCK OUT" : "CLOCK IN");
    setPlay(checked ? stop : play);
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
    <Section>
      <div className="position-relative d-none d-lg-flex">
        <Time>{time}</Time>
        <AmOrPm>{amPm}</AmOrPm>
      </div>
      <DivSection>
        <img
          className="playButton"
          src={Isplay}
          alt="icon"
          onClick={handleToggleClick}
        />
        <Toggle
          id="toggle-check"
          type="checkbox"
          checked={checked}
          value="1"
          onChange={handleToggle}
        >
          {clockIn}
        </Toggle>
      </DivSection>
    </Section>
  );
}
