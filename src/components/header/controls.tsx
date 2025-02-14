import React from 'react';
import lightmode from './assets/light-mode-icon.svg'
import darkmode from './assets/dark-mode-icon.svg'
import notifications from './assets/notifications.svg'
import help from './assets/help.svg'
import messages from './assets/messages.svg'
import profile from './assets/default-profile.svg'
import Profile from './Profile';
import Messages from './MessagesHeader';


export default function Controls() {
  return (
    <div className='d-flex justify-content-between align-items-center gap-md-4 gap-2 me-1 ms-2' >
      <img src={lightmode} alt="light mode" />
      <img src={notifications} alt="notifications" />
      <img className='ms-1' src={help} alt="help" />
     <span className='d-none d-lg-flex'><Messages /></span>
     <span className='d-lg-flex'><Profile /></span> 
    </div>
  )
}