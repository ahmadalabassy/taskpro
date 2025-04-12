import React from "react";
import { Modal } from "react-bootstrap";
import styles from "./Profile.module.css";
import { TeamMemberCardProps } from "../../typings/types";

interface ProfileModalProps extends TeamMemberCardProps {
  Show: boolean;
  onHide: () => void;
}
const Profile = ({
  Show,
  onHide,
  id,
  name,
  role,
  email,
  image,
  supervisor,
  phone,
  address,
  department,
  plannedLeavesDate,
  active,
  joinDate,
}: ProfileModalProps) => {
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <>
      {/* <img
        className={styles.iconHeader}
        src="./default-profile-img.svg"
        alt="messages"
        onClick={onHide}
      /> */}
      <Modal
        show={Show}
        onHide={onHide}
        centered
        dialogClassName={styles.modalContent}
      >
        <Modal.Body className={styles.modalBody}>
          <div className={`${styles.headingProfile}`}>
            <img
              src={image ? image : "./default-profile-img.svg"}
              alt="userImage"
            />
          </div>
          <i
            className={`bi bi-x ${styles.exitButtonProfile}`}
            onClick={onHide}
          ></i>
          <div className="d-flex flex-column justify-content-center align-items-center ">
            <p className={styles.heading}>{name}</p>
            <p className={styles.idHeading}>#Id-{id}</p>
            <p className={styles.jobHeading}>{role}</p>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-start ms-lg-0 p-lg-1">
            <p className={styles.userDataHeading}>
              <i className="bi bi-envelope"></i>
              {email}
            </p>
            <p className={styles.userDataHeading}>
              <i className="bi bi-telephone"></i>
              {phone}
            </p>
            <p className={styles.userDataHeading}>
              <i className="bi bi-geo-alt"></i>
              {address}
            </p>
            <p className={styles.userDataHeading}>
              <i className="bi bi-people"></i>
              <strong className="me-1">{department} </strong> Department{" "}
            </p>
            <p className={styles.userDataHeading}>
              <i className="bi bi-person-gear"></i>
              <strong className="me-1">@{supervisor}</strong>Supervisor
            </p>
            <p className={styles.userDataHeading}>
              <i className="bi bi-door-open"></i>Planned Leaves:
              <strong className="ms-1">{plannedLeavesDate}</strong>
            </p>
          </div>
          <div className="d-flex flex-column justify-content-center align-align-items-center mt-1">
            <p className={`${styles.footerHeading} text-center`}>
              Joined in :<strong className="ms-1">{joinDate}</strong>
            </p>
            <div className="d-flex flex-row align-items-center justify-content-evenly">
              <span className={styles.footerHeading}>Status</span>
              <span
                className={`${styles.headingStatus} ${
                  active ? styles.activeStatus : styles.inActiveStatus
                }`}
              >
                {active ? "Active" : "Inactive"}
              </span>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Profile;
