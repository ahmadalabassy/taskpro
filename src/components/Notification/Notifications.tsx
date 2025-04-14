import { Dropdown } from "react-bootstrap";

import styles from "./Notifications.module.css";
import headerStyles from "../Header/Header.module.css";

const Notification = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle   
        id="NotificationDropdown-btn"
        className={`${headerStyles.iconHeader} ${styles.dropdownToggle}`}

      >
        <i className={`bi bi-bell`}></i>
      </Dropdown.Toggle>
      <Dropdown.Menu className={`${styles.notificationDropdown} `}>
        <Dropdown.Header>Recent Notifications</Dropdown.Header>
        <Dropdown.Item href="#/action-1" className="notificationItem">
          <div className={styles.notificationContent}>
            <div className={styles.notificatioTitle}>New Message</div>
            <div className={styles.notificationTime}>2 mins ago</div>
          </div>
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2" className="notificationItem">
          <div className={styles.notificationContent}>
            <div className={styles.notificationTitle}>Order Shipped</div>
            <div className={styles.notificationTime}>1 hour ago</div>
          </div>
        </Dropdown.Item>
        <Dropdown.Item href="#/action-3" className="notificationItem">
          <div className={styles.notificationContent}>
            <div className={styles.notificationTitle}>New Follower</div>
            <div className={styles.notificationTime}>3 hours ago</div>
          </div>
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#/action-4" className="viewAll">
          View All Notifications
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Notification;
