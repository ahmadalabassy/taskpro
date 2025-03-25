import { Link } from "react-router"
import styles from "./Aside.module.css"
import React, { useState } from "react"
export default function Aside() {
  const [activeBtn, setActiveBtn] = useState(1);
  const handleClick = (index) => {
    setActiveBtn(index);
  };
  



  return (
    // <aside>
    //   <Link to="/"><img src="./../../../public/logo.png" alt="" srcset="" /></Link>
    //   <section>
    //     <Link to="/"><p>Home</p></Link>
    //     <Link to="/tasks"><p>Tasks</p></Link>
    //     <Link to="/drive"><p>Drive</p></Link>
    //     <Link to="/progress"><p>Progress</p></Link>
    //     <Link to="/team-members"><p>Team Memebers</p></Link>
    //     <Link to="/messages"><p>Messages</p></Link>
    //   </section>

    //   <section>
    //     <p>Workspace</p>
    //     <ul>
    //       <li>Product Design</li>
    //       <li>UI/UX Design</li>
    //       <li>Web App Development</li>
    //       <li>Mobile App Development</li>
    //     </ul>
    //   </section>
    //   <button>+ Create Task</button>
    // </aside>
    <div className={`d-flex flex-column flex-shrink-0 p-3 bg-body-light justify-content-center asideBtn ${styles.aside}`}>
      <a href="/" className={`d-flex align-items-end justify-content-center mb-3 me-5 gap-2 link-body-emphasis text-decoration-none `}>
        <img className={` `} src="./../../../public/logo-no-text.svg" alt="Logo" />
        <span className="fs-4 fw-bold">TASKPRO</span>
      </a>

      <ul className="nav nav-pills gap-2 flex-column mb-auto">
        <li className="nav-item">
        <a href="#" className={`nav-link d-flex align-items-center ${activeBtn === 1 ? styles.asideBtnActive : styles.asideBtnNormal}`} onClick={() => handleClick(1)}>
        <i className="bi me-2 fs-5 bi-grid"></i>
            <span >Home</span> 
          </a>
        </li>
        <li>
        <a href="#" className={`nav-link d-flex align-items-center ${activeBtn === 2 ? styles.asideBtnActive : styles.asideBtnNormal}`} onClick={() => handleClick(2)}>
            <i className="bi me-2 fs-5 bi-clipboard-check"></i>
            Task
          </a>
        </li>
        <li>
        <a href="#" className={`nav-link d-flex align-items-center ${activeBtn === 3 ? styles.asideBtnActive : styles.asideBtnNormal}`} onClick={() => handleClick(3)}>
            <i className="bi me-2 fs-5 bi-folder"></i>
            Drive
          </a>
        </li>
        <li>
        <a href="#" className={`nav-link d-flex align-items-center ${activeBtn === 4 ? styles.asideBtnActive : styles.asideBtnNormal}`} onClick={() => handleClick(4)}>
          <i className="bi me-2 fs-5 bi-bar-chart"></i>            Progress
          </a>
        </li>
        <li>
        <a href="#" className={`nav-link d-flex align-items-center ${activeBtn === 5 ? styles.asideBtnActive : styles.asideBtnNormal}`} onClick={() => handleClick(5)}>
          <i className="bi me-2 fs-5 bi-people"></i>            Team Members
          </a>
        </li>
        <li>
        <a href="#" className={`nav-link d-flex align-items-center ${activeBtn === 6 ? styles.asideBtnActive : styles.asideBtnNormal}`} onClick={() => handleClick(6)}>
          <i className="bi me-2 fs-5 bi-chat-left-text"></i>         Messages
          </a>
        </li>
      </ul>
    </div>
  )
}