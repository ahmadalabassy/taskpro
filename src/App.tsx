import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout.tsx";
import "./App.css";
import Home from "./components/Home/Home.tsx";
import Drive from "./components/Drive/Drive.tsx";
import Progress from "./components/Progress/Progress.tsx";
import TeamMemebers from "./components/TeamMembers/TeamMembers.tsx";
import Messages from "./components/Messages/Messages.tsx";
import Tasks from "./components/Tasks/Tasks";
import Register from "./components/Register/Register.tsx";
import Login from "./components/Login/Login.tsx";
import { useSelector } from "react-redux";
import { applyTheme } from "./utils/theme.ts";
import { RootState } from "./store";
export default function App() {
  const theme = useSelector((state: RootState) => state.theme.mode);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

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
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
