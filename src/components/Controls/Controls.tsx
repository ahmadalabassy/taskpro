import React from "react";

import Profile from "../Profile/Profile";
import Messages from "../MessagesHeader/MessagesHeader";
import Notification from "../Notification/Notification";

export default function Controls() {
  return (
    <div className="d-flex justify-content-between align-items-center gap-md-3 gap-2 me-1 ms-2">
      <span className="iconHeader p-1"><i className="bi bi-sun-fill"></i></span>
      <span className="ms-1 iconHeader"><i className="bi bi-question-circle"></i></span>
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
