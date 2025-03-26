import React, { useState } from 'react';
import Timer from "../Timer/Timer.tsx";
import Notification from '../Notification/Notifications.tsx';
import Profile from '../Profile/Profile.tsx';
import styles from "./Header.module.css";

export default function Header() {
  const [lightDarkMode,setLightDarkMode]=useState('bi-brightness-high');
  const toggleMode=()=>{
    setLightDarkMode(()=>{
      return lightDarkMode==='bi-brightness-high'? 'bi-moon-fill' : 'bi-brightness-high';
    })
  }

  return (
    <header className={styles.header}>
      {/* searchBar */}
      <div className="position-relative">
        <input className={styles.searchInput}placeholder="Search Tasks ..." type="text" />
        <span className={styles.searchIcon}><i className="bi bi-search"></i></span>
      </div>
      {/* timer */}
      <Timer />
      {/* icons */}
      <div className='d-flex justify-content-between align-items-center gap-md-3 gap-2 me-1 ms-2'>
        <i className={`bi ${lightDarkMode} ${styles.iconHeader} rounded-pill ${lightDarkMode==='bi-brightness-high'? styles.lightIcon : styles.darkIcon}`} onClick={toggleMode}></i>
        <span ><Notification /></span>
        <span className={`d-none d-lg-flex ${styles.iconHeader}`}> <i className="bi bi-chat-right-text"></i></span>
        <i className={`bi bi-question-circle ${styles.iconHeader}`}></i>
        <span className={`d-lg-flex d-none  ${styles.profile}`}><Profile /></span>
      </div>
    </header>
  )
}