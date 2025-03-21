import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import styles from "./Profile.module.css"


const Profile = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <img
        className={styles.iconHeader}
        src="./default-profile-img.svg"
        alt="messages"
        onClick={handleShow}
      />
      <Modal show={show} onHide={handleClose} centered dialogClassName={styles.modalContent}>
        <Modal.Body>
          <div className={`${styles.headingProfile}`}>
            <img src="./default-profile-img.svg" alt="messages" />
          </div>
          <i className={`bi bi-x ${styles.exitButtonProfile}`} onClick={handleClose}></i>
          <div className="d-flex flex-column justify-content-center align-items-center ">
            <p className={styles.heading}>Fares Elabasery</p>
            <p className={styles.idHeading}>#Id-003240</p>
            <p className={styles.jobHeading}>Web App Developer</p>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-start ms-lg-0 p-lg-1">
            <p className={styles.userDataHeading}>
              <i className="bi bi-envelope"></i>fareselebasery@outlook.com
            </p>
            <p className={styles.userDataHeading}>
              <i className="bi bi-telephone"></i>+20 1207286573
            </p>
            <p className={styles.userDataHeading}>
              <i className="bi bi-geo-alt"></i>Egypt
            </p>
            <p className={styles.userDataHeading}>
              <i className="bi bi-people"></i>
              <strong className="me-1">UI & UX </strong> Department{" "}
            </p>
            <p className={styles.userDataHeading}>
              <i className="bi bi-person-gear"></i>
              <strong className="me-1">@Ahmed Abassey</strong>Supervisor
            </p>
            <p className={styles.userDataHeading}>
              <i className="bi bi-door-open"></i>Planned Leaves:
              <strong className="ms-1">12-1-2025</strong>
            </p>
          </div>
          <div className="d-flex flex-column justify-content-center align-align-items-center mt-1">
            <p className={`${styles.footerHeading} text-center`}>
              Joined in :<strong className="ms-1">1-1-2025</strong>
            </p>
            <div className="d-flex flex-row align-items-center justify-content-evenly">
              <span className={styles.footerHeading}>Status</span>
              <span className={`${styles.headingStatus} ${styles.activeStatus}`}>Active</span>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Profile;
