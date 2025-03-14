import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout.tsx";
import Login from "./components/Login/Login";
import "./App.css";
import Home from "./components/Home/Home.tsx";
import Drive from "./components/Drive.tsx/Drive.tsx";
import Progress from "./components/Progress/Progress.tsx";
import TeamMemebers from "./components/TeamMembers/TeamMembers.tsx";
import Messages from "./components/Messages/Messages.tsx";
import Tasks from "./components/Tasks/Tasks";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/drive" element={<Drive />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/team-members" element={<TeamMemebers />} />
        <Route path="/messages" element={<Messages />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
