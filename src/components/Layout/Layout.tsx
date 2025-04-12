import React from "react";
import { Outlet } from "react-router-dom";
import Aside from "../Aside/Aside";
import Header from "../Header/Header.tsx";
import styles from "./Layout.module.css";

export default function Layout() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Aside />
      <div className={`w-100 ${styles.mainBG}`}>
        <Header />
        <Outlet />
      </div>
    </div>
  );
}
