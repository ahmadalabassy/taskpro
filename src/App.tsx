import { useEffect } from "react";
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
        <Route
          path="/progress"
          element={
            <Progress
              id={1}
              title="Sample Task"
              description="Sample Description"
              dueDate="2023-06-30"
              status="In Progress"
              priority="High"
              assignedTo="John Doe"
              createdAt={new Date().toISOString()}
              updatedAt={new Date().toISOString()}
              completedDate={new Date().toISOString()}
              comments={[]}
              files={[]}
              progress={50}
              members={[
                {
                  name: "John Doe",
                  role: "Developer",
                  department: "Engineering",
                  address: "123 Main St",
                  plannedLeavesDate: ["2023-07-15"],
                },
              ]}
            />
          }
        />
        <Route path="/team-members" element={<TeamMemebers />} />
        <Route path="/messages" element={<Messages />} />
      </Route>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
