import React, { useState } from 'react';
import Timer from "../Timer/Timer.tsx";
import Notification from '../Notification/Notifications.tsx';
import Profile from '../Profile/Profile.tsx';
import styles from "./Header.module.css";
import { toggleTheme } from '../../store/themeSlice.ts';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

export default function Header() {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.mode);
  const lightDarkMode = theme === 'light' ? 'bi-brightness-high' : 'bi-moon-fill';
  const [showModal, setShowModal] = useState(false);
  
  const toggleMode = () => {
    dispatch(toggleTheme()); 
  };

  const handleClick = () => {
    setShowModal(true);
  }

  const handleCloseModal = () => {
    setShowModal(false);
  }

  return (
    <header className={styles.header}>
      {/* searchBar */}
      <div className="position-relative">
        <input className={styles.searchInput} placeholder="Search Tasks ..." type="text" />
        <span className={styles.searchIcon}><i className="bi bi-search"></i></span>
      </div>
      {/* timer */}
      <Timer />
      {/* icons */}
      <div className='d-flex justify-content-between align-items-center gap-md-3 gap-2 me-1 ms-2'>
        <i className={`bi ${lightDarkMode} ${styles.iconHeader} rounded-pill ${lightDarkMode === 'bi-brightness-high' ? styles.lightIcon : styles.darkIcon}`} onClick={toggleMode}></i>
        <span><Notification /></span>
        <span className={`d-none d-lg-flex ${styles.iconHeader}`}> <i className="bi bi-chat-right-text"></i></span>
        <i className={`bi bi-question-circle ${styles.iconHeader}`}></i>
        <span className={`d-lg-flex d-none  ${styles.profile}`}><Profile Show={showModal} onHide={handleCloseModal} />
          <img src="./../../../public/default-profile-img.svg" alt="profile user" onClick={handleClick} /></span>
      </div>
    </header>
  );
}
