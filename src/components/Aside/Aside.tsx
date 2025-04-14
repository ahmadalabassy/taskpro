import { useState } from "react";
import { Link } from "react-router";

import Profile from "./../Profile/Profile";

import { Badge } from "react-bootstrap";
import styles from "./Aside.module.css";

export default function Aside() {
  const [activeBtn, setActiveBtn] = useState(1);
  const [activeDropdownBtn, setActiveDrobpownBtn] = useState(2);
  const [showModal, setShowModal] = useState(false);
  const handleClick = (index: number) => {
    setActiveBtn(index);
  };
  const handleClickDropdown = (index: number) => {
    setActiveDrobpownBtn(index);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <aside
      className={` d-flex flex-row flex-md-column flex-lg-shrink-0 flex-md-shrink-1 p-md-3 p-0 bg-body-light  ${styles.aside}`}
    >
      <Link
        to="/"
        className={`d-flex align-items-end justify-content-center mb-4 me-5 gap-2 link-body-emphasis d-md-flex d-none text-decoration-none `}
      >
        <img src={`/logo-no-text.svg`} alt="Logo" />
        <span className="fs-4 fw-bold">TASKPRO</span>
      </Link>

      <ul className="nav nav-pills flex-row flex-md-column mb-md-1 mb-0 gap-2 ps-1">
        <li className="nav-item d-md-block d-none">
          <Link
            to="/"
            className={`nav-link d-flex align-items-center ${
              activeBtn === 1 ? styles.asideBtnActive : styles.asideBtnNormal
            }`}
            onClick={() => handleClick(1)}
          >
            <i className="bi me-md-2 fs-5 bi-grid"></i>
            <span className="d-md-flex d-none">Home</span>
          </Link>
        </li>
        <li className="nav-item d-md-none d-flex ">
          <img
            src="../../../public/default-profile-img.svg"
            alt="UserProfile"
            onClick={handleShowModal}
          />
          <Profile Show={showModal} onHide={handleCloseModal} />
        </li>
        <li>
          <Link
            to="/tasks"
            className={`nav-link d-flex align-items-center ${
              activeBtn === 2 ? styles.asideBtnActive : styles.asideBtnNormal
            }`}
            onClick={() => handleClick(2)}
          >
            <i className="bi me-md-2 fs-5  bi-clipboard-check"></i>
            <span className="d-md-flex d-none">Task</span>
          </Link>
        </li>
        <li>
          <Link
            to="/drive"
            className={`nav-link d-flex align-items-center ${
              activeBtn === 3 ? styles.asideBtnActive : styles.asideBtnNormal
            }`}
            onClick={() => handleClick(3)}
          >
            <i className="bi me-md-2 fs-5 bi-folder"></i>
            <span className="d-md-flex d-none">Drive</span>
          </Link>
        </li>
        <li>
          <Link
            to="/progress"
            className={`nav-link d-flex align-items-center ${
              activeBtn === 4 ? styles.asideBtnActive : styles.asideBtnNormal
            }`}
            onClick={() => handleClick(4)}
          >
            <i className="bi me-md-2 fs-5 bi-bar-chart"></i>{" "}
            <span className="d-md-flex d-none">Progress</span>
          </Link>
        </li>
        <li>
          <Link
            to="/team-members"
            className={`nav-link d-flex align-items-center ${
              activeBtn === 5 ? styles.asideBtnActive : styles.asideBtnNormal
            }`}
            onClick={() => handleClick(5)}
          >
            <i className="bi me-md-2 fs-5 bi-people"></i>{" "}
            <span className="d-md-flex d-none"> Team Members</span>
          </Link>
        </li>
        <li>
          <Link
            to="/messages"
            className={`nav-link d-flex align-items-center ${
              activeBtn === 6 ? styles.asideBtnActive : styles.asideBtnNormal
            }`}
            onClick={() => handleClick(6)}
          >
            <i className="bi me-md-2 fs-5 bi-chat-left-text"></i>{" "}
            <span className="d-md-flex d-none">Messages</span>{" "}
            <Badge bg="danger ms-auto rounded-3 p-1 d-md-flex d-none">10</Badge>
          </Link>
        </li>
      </ul>
      <hr className={`d-md-block d-none ${styles.listCircle}`} />
      {/* dropdown bootstrap */}
      <ul
        className=" d-md-block d-none list-unstyled ps-0 overflow-y-auto overflow-y-scroll scroll"
        style={{ scrollbarWidth: "none" }}
      >
        <li className="mb-1">
          <div className="d-flex justify-content-between align-items-center">
            <button
              className={`btn btn-toggle d-inline-flex ps-4 border-0 fw-bold ${styles.CustomTextColor}`}
              data-bs-toggle="collapse"
              data-bs-target="#dashboard-collapse"
              aria-expanded="true"
            >
              <i className={`bi bi-chevron-down me-2 ${styles.btnToggle}`}></i>{" "}
              WorkSpace
            </button>
            <span className="btn-light btn p-0 text-light bg-primary rounded-2 ps-1 pe-1 me-3">
              <i className="bi bi-plus-lg fw-bold"></i>
            </span>
          </div>
          <div className="collapse show ps-4 ms-4 ms-2" id="dashboard-collapse">
            <ul
              className={`btn-toggle-nav fw-normal pt-1 pb-1 small list-group ${styles.listCircle}`}
            >
              <li>
                <a
                  href="#"
                  className={`${
                    activeDropdownBtn !== 1 ? styles.listCategoryBtn : ""
                  } pt-2 d-inline-flex text-decoration-none `}
                  onClick={() => handleClickDropdown(1)}
                >
                  Product Design
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`${
                    activeDropdownBtn !== 2 ? styles.listCategoryBtn : ""
                  } pt-2 d-inline-flex text-decoration-none `}
                  onClick={() => handleClickDropdown(2)}
                >
                  UI/UX Design
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`${
                    activeDropdownBtn !== 3 ? styles.listCategoryBtn : ""
                  } pt-2 d-inline-flex text-decoration-none `}
                  onClick={() => handleClickDropdown(3)}
                >
                  Web App Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`${
                    activeDropdownBtn !== 4 ? styles.listCategoryBtn : ""
                  } pt-2 d-inline-flex text-decoration-none `}
                  onClick={() => handleClickDropdown(4)}
                >
                  Mobile App Development
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
      <button className="btn btn-primary m-auto pt-2 pb-2 m-5 ps-4 pe-4 rounded-3 align-items-center d-flex fw-medium d-md-flex d-none">
        <i className="bi bi-plus fs-4 me-1"></i> Create Task
      </button>
    </aside>
  );
}
