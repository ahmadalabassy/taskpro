import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router'

import Header from './components/Header/index.tsx';
import Aside from './components/Aside.tsx'
import Home from './components/Pages/Home.tsx'
import Messages from './components/Pages/Messages.tsx'
import Tasks from './components/Pages/tasks/Tasks.tsx'
import Progress from './components/Pages/Progress.tsx'
import TeamMemebers from './components/Pages/TeamMembers.tsx'
import Drive from './components/Pages/Drive.tsx'

export default function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Aside />
      <div className='w-100'>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/drive" element={<Drive />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/team-members" element={<TeamMemebers />} />
          <Route path="/messages" element={<Messages />} />
        </Routes>
      </div>
    </div>
  )
}

