import React from "react";

import Profile from "./Profile/Profile";
import Messages from "./MessagesHeader/MessagesHeader";
import Notification from "./Notification/Notifications";

import styles from "../Header.module.css";

export default function Controls() {
  return (
    <div className="d-flex justify-content-between align-items-center gap-md-3 gap-2 me-1 ms-2">
      <span className={`${styles.iconHeader} p-1`}><i className="bi bi-sun-fill"></i></span>
      <span className={`${styles.iconHeader} ms-1`}><i className="bi bi-question-circle"></i></span>
      <span className="">
        <Notification />
      </span>
      <span className="d-none d-lg-flex iconHeader p-2">
        <Messages />
      </span>
      <span className="d-none d-lg-flex">
        <Profile />
      </span>
    </div>
  );
}
