import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import TaskCard from "../TaskCard/TaskCard";
import styles from "./Tasks.module.css";

const Tasks = () => {
  const task = {
    name: "UX Research",
    comments: ["Great work!", "Needs improvement."],
    files: [{ name: "research.pdf" }, { name: "design.png" }],
  }; // This is a dummy task object. Replace it with the actual task object.
  return (
    <div className={`container px-4 ${styles.tasksBG} ${styles.bgHeight}`}>
      <main className={`row `}>
        <div className="p-lg-4 px-3 bg-white rounded-3 col-md-3">
          <div className="d-flex flex-row justify-content-between align-items-center py-3 headingw-100">
            <div className="d-flex flex-row justify-content-start align-items-center">
              <span
                id="rectangle"
                className={`${styles.rectangle} rounded-2`}
                style={{ backgroundColor: "#e493d8ab" }}
              ></span>
              <h2 className="ms-3 fw-bold mb-0">Planned</h2>
            </div>
            <div className="dropdown">
              <button
                className="btn py-0"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-three-dots-vertical fs-2"></i>
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <TaskCard task={task} />
        </div>

        <div className="p-lg-4 p-2 bg-white rounded-3 col-md-3">
          <div className="d-flex flex-row justify-content-between align-items-center py-3 heading w-100">
            <div className="d-flex flex-row justify-content-start align-items-center">
              <span
                id="rectangle"
                className="rounded-2"
                style={{ backgroundColor: "#e493d8ab" }}
              ></span>
              <h2 className="ms-3 fw-bold mb-0">Planned</h2>
            </div>
            <div className="dropdown">
              <button
                className="btn py-0"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-three-dots-vertical fs-2"></i>
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <TaskCard task={task} />
        </div>
        <div className="p-lg-4 p-2 bg-white rounded-3 col-md-3">
          <div className="d-flex flex-row justify-content-between align-items-center py-3 heading w-100">
            <div className="d-flex flex-row justify-content-start align-items-center">
              <span
                id="rectangle"
                className="rounded-2"
                style={{ backgroundColor: "#e493d8ab" }}
              ></span>
              <h2 className="ms-3 fw-bold mb-0">Planned</h2>
            </div>
            <div className="dropdown">
              <button
                className="btn py-0"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-three-dots-vertical fs-2"></i>
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <TaskCard task={task} />
        </div>

        <div className="p-lg-4 p-2 bg-white rounded-3 col-md-3">
          <div className="d-flex flex-row justify-content-between align-items-center py-3 heading w-100">
            <div className="d-flex flex-row justify-content-start align-items-center">
              <span
                id="rectangle"
                className="rounded-2"
                style={{ backgroundColor: "#e493d8ab" }}
              ></span>
              <h2 className="ms-3 fw-bold mb-0">Planned</h2>
            </div>
            <div className="dropdown">
              <button
                className="btn py-0"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-three-dots-vertical fs-2"></i>
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <TaskCard task={task} />
        </div>
      </main>
    </div>
  );
};
export default Tasks;
