import { Outlet } from "react-router-dom";
import Aside from "../Aside/Aside";
import styles from "./Layout.module.css";
import Header from "../header/Header";

export default function Layout() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Aside />
      <div className={`w-100 ${styles.mainBG} overflow-x-hidden`}>
        <Header />
        <Outlet />
      </div>
    </div>
  );
}
