import React from "react";
import { Outlet } from "react-router-dom";
import Aside from "../Aside/Aside";
import Header from "../Header/Header";

export default function Layout() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Aside />
      <div className="w-100">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}
