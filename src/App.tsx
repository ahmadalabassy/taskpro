import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout.tsx";
import Home from "./components/Pages/Home";
import Messages from "./components/Pages/Messages";
import Tasks from "./components/Pages/tasks/Tasks";
import Progress from "./components/Pages/Progress";
import TeamMembers from "./components/Pages/TeamMembers";
import Drive from "./components/Pages/Drive";
import Login from "./components/Login/Login";
import "./App.css";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/drive" element={<Drive />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/team-members" element={<TeamMembers />} />
        <Route path="/messages" element={<Messages />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
