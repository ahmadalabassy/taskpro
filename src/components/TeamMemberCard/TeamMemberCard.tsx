import React, { useState } from "react";
import { Card } from "react-bootstrap";
import Profile from './../Profile/Profile';
import styles from "./TeamMemberCard.module.css";
import { TeamMemberCardProps } from "../../typings/types";





export default function TeamMemberCard({
  id,
  name,
  role,
  email,
  image,
  supervisor,
  phone,
  department,
  address,
  active = true,
  plannedLeavesDate,
  joinDate,
  createdAt,
}: TeamMemberCardProps) {
  const [showModal, setShowModal] = useState(false);


  const handleClick = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <Card className={styles.CustomCard} onClick={handleClick}>
        <div className={styles.imgContainer}>
        <Card.Img variant="top" src={image} />
        <span className={active ? styles.dotActive : styles.dotInActive}></span>
        </div>
        <Card.Body>
          <Card.Title className={`fw-semibold ${styles.title}`}>{name}</Card.Title>
          <Card.Text>
            <p className={` ${styles.email} `}>{email}</p>
            <p className={`${styles.JobTitle} fw-bolder`}>{role}</p>
            <button className={`btn btn-primary border-0 rounded-pill ${styles.cardBtn}`}><i className="bi bi-arrow-right fs-5"></i></button>
          </Card.Text>
        </Card.Body>
      </Card>
      {/* <Profile Show={showModal} onHide={handleCloseModal} /> */}
      <Profile Show={showModal} onHide={handleCloseModal} id={id} name={name} role={role} email={email} image={image} supervisor={supervisor} phone={phone} createdAt={createdAt} address={address} department={department} plannedLeavesDate={plannedLeavesDate} active={active} joinDate={joinDate} />
    </>
  );
}

