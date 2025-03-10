import React from 'react';

import help from './assets/help.svg';
import lightmode from './assets/light-mode-icon.svg';
import darkmode from './assets/dark-mode-icon.svg';

import Profile from './Profile';
import Messages from './MessagesHeader';
import Notification from './Notification';

export default function Controls() {
  return (
    <div className='d-flex justify-content-between align-items-center gap-md-3 gap-2 me-1 ms-2'>
      <img className='iconHeader p-1' src={lightmode} alt="light mode" />
      <img className='ms-1 iconHeader' src={help} alt="help" />
      <span className=''><Notification /></span>
      <span className='d-none d-lg-flex iconHeader p-2'><Messages /></span>
      <span className='d-none d-lg-flex'><Profile /></span>
    </div>
  )
}