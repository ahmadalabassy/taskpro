import React from 'react';
import { Dropdown, Badge } from 'react-bootstrap';
import './css/header.css'; 
import NotificationIcon from './assets/notifications.svg';

const Notification = () => {
    return (
        <Dropdown className='DropDown-heading'>
            <Dropdown.Toggle className='iconHeader' variant="light"  id='NotificationDropdown-btn'>
            <img src={NotificationIcon} alt='NotificationIcon' />
            </Dropdown.Toggle>
            <Dropdown.Menu className="notification-dropdown">
                <Dropdown.Header>Recent Notifications</Dropdown.Header>
                <Dropdown.Item href="#/action-1" className="notification-item">
                    <div className="notification-content">
                        <div className="notification-title">New Message</div>
                        <div className="notification-time">2 mins ago</div>
                    </div>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2" className="notification-item">
                    <div className="notification-content">
                        <div className="notification-title">Order Shipped</div>
                        <div className="notification-time">1 hour ago</div>
                    </div>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3" className="notification-item">
                    <div className="notification-content">
                        <div className="notification-title">New Follower</div>
                        <div className="notification-time">3 hours ago</div>
                    </div>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-4" className="view-all">
                    View All Notifications
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default Notification;