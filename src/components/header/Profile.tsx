import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import ProfilePic from './assets/default-profile.svg';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './css/header.css';



const Profile = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <img className='iconHeader' src={ProfilePic} alt="messages" onClick={handleShow} />
            <Modal className='custom-modal' show={show} onHide={handleClose}   >
                <Modal.Body>
                    <div className='heading-profile'>
                        <img src={ProfilePic} alt="messages" />
                    </div>
                    <i className="bi bi-x exit-button-profile" onClick={handleClose}></i>
                    <div className='d-flex flex-column justify-content-center align-items-center '>
                        <p className='heading'>Fares Elabasery</p>
                        <p className='id-heading'>#Id-003240</p>
                        <p className='job-heading'>Web App Developer</p>
                    </div>
                    <div className='d-flex flex-column justify-content-center align-items-start ps-md-5 ms-md-4 pe-md-3 ms-lg-0 p-lg-1'>
                        <p className='user-data-heading'><i className="bi bi-envelope"></i>fareselebasery@outlook.com</p>
                        <p className='user-data-heading'><i className="bi bi-telephone"></i>+20 1207286573</p>
                        <p className='user-data-heading'><i className="bi bi-geo-alt"></i>Egypt</p>
                        <p className='user-data-heading'><i className="bi bi-people"></i><strong className='me-1'>UI & UX </strong> Department </p>
                        <p className='user-data-heading'><i className="bi bi-person-gear"></i><strong className='me-1'>@Ahmed Abassey</strong>Supervisor</p>
                        <p className='user-data-heading'><i className="bi bi-door-open"></i>Planned Leaves:<strong className='ms-1'>12-1-2025</strong></p>
                    </div>
                    <div className='d-flex flex-column justify-content-center align-align-items-center mt-1'>
                        <p className='footer-heading text-center'>Joined in :<strong className='ms-1'>1-1-2025</strong></p>
                        <div className="d-flex flex-row align-items-center justify-content-evenly">
                            <span className='footer-heading'>Status</span>
                            <span className='heading-status active-status'>Active</span>
                        </div>
                    </div>

                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Profile