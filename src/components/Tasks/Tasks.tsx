import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import TaskCard from "../TaskCard/TaskCard";
import styles from "./Tasks.module.css";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import ReusableModal from "../ReusableModal/ReusableModal";
import EditTaskModal from "../TaskEditModal/TaskEditModal";
import { TaskData } from "../../typings/types";
import { faker } from "@faker-js/faker";

// type DataItem = {
//   id: number;
//   name: string;
// };

const Tasks = () => {
  
  const [showEditTaskModal, setShowEditTaskModal] = useState(false);
  const generateMockTasks = (count: number): TaskData[] => {
    return Array.from({ length: count }, () => ({
      id: faker.number.int({ min: 1, max: 100000000 }),
      title: faker.lorem.words(3), // Simulate task name
      description: faker.lorem.sentence(), // Simulate task description
      dueDate: faker.date.future().toISOString().split("T")[0],
      priority: faker.helpers.arrayElement(["Low", "Medium", "High"]),
      status: faker.helpers.arrayElement(["Planned", "In Progress", "Completed"]),
      assignedTo: faker.person.fullName(),
      comments: Array.from({ length: 3 }, () => faker.lorem.sentence()),
      files: Array.from({ length: 2 }, () => ({
        name: faker.system.fileName(),
        type: faker.system.mimeType(),
        size: faker.number.int({ min: 1000, max: 10000 }),
      }) as File),
      createdAt: faker.date.past().toISOString(),
      updatedAt: faker.date.recent().toISOString(),
      progress: faker.number.int({ min: 0, max: 100 }),
      members: Array.from({ length: 2 }, () => ({
        id: faker.number.int({ min: 1, max: 100 }),
        name: faker.person.fullName(),
        role: faker.person.jobTitle(),
        email: faker.internet.email(),
        image: faker.image.avatar(),
        department: faker.commerce.department(),
        address: faker.location.streetAddress(),
        plannedLeavesDate: faker.date.future().toISOString().split("T")[0],
        joinDate: faker.date.past().toISOString().split("T")[0],
      })),
      completedDate: faker.helpers.arrayElement([
        "",
        faker.date.future().toISOString().split("T")[0],
      ]),
    }));
  };

  // Generate 10 mock tasks
  const tasks = generateMockTasks(10);
  const [data, setData] = useState<TaskData[]>(generateMockTasks(10));
  // const task: TaskData = {
  //   id: faker.number.int({ min: 1, max: 1000 }),
  //   title: faker.lorem.words(3), 
  //   description: faker.lorem.sentence(), 
  //   dueDate: faker.date.future().toISOString().split("T")[0], // Generate a future date
  //   priority: faker.helpers.arrayElement(["Low", "Medium", "High"]), // Random priority
  //   status: faker.helpers.arrayElement(["Planned", "In Progress", "Completed"]), // Random status
  //   assignedTo: faker.person.fullName(), 
  //   comments: Array.from({ length: 3 }, () => faker.lorem.sentence()), // Generate random comments
  //   files: Array.from({ length: 2 }, () => ({
  //     name: faker.system.fileName(),
  //     type: faker.system.mimeType(),
  //     size: faker.number.int({ min: 1000, max: 10000 }), // Use faker.number.int
  //   }) as File),
  //   createdAt: faker.date.past().toISOString(), // Generate a past date
  //   updatedAt: faker.date.recent().toISOString(), // Generate a recent date
  //   progress: faker.number.int({ min: 0, max: 100 }), // Use faker.number.int
  //   members: Array.from({ length: 2 }, () => ({
  //     id: faker.number.int({ min: 1, max: 100 }), // Use faker.number.int
  //     name: faker.person.fullName(),
  //     role: faker.person.jobTitle(),
  //     email: faker.internet.email(),
  //     image: faker.image.avatar(),
  //     department: faker.commerce.department(),
  //     address: faker.location.streetAddress(),
  //     plannedLeavesDate: faker.date.future().toISOString().split("T")[0],
  //     joinDate: faker.date.past().toISOString().split("T")[0],
  //   })), // Generate mock team members
  //   completedDate: faker.helpers.arrayElement([
  //     "",
  //     faker.date.future().toISOString().split("T")[0],
  //   ]), 
  // };
  return (
    <div className={`container p-4  ${styles.bgHeight}`}>
      <ButtonGroup data={data} setData={setData} />
          <main className="row px-3 px-md-0">
        {tasks.map((task) => (
          <div className="col-12 col-md-6 col-lg-4 mb-4" key={task.id}>
            <div className={`${styles.heightFit} ${styles.tasksBG } p-3 p-lg-4  rounded-3 shadow-sm`}>
              <div className="d-flex flex-row justify-content-between align-items-center mb-3">
                <div className="d-flex flex-row justify-content-start align-items-center gap-2">
                  <span
                    className={`${styles.rectangle} rounded-2`}
                    style={{ backgroundColor: "#e493d8ab" }}
                  ></span>
                  <h2 className="fw-bold fs-5 mb-0">{task.status}</h2>
                </div>
                <div className="dropdown">
                  <button
                    className="btn btn-sm p-1"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="bi bi-three-dots-vertical fs-5"></i>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else</a></li>
          </ul>
                </div>
              </div>
              <TaskCard task={task} focusOnComments={false} focusOnFiles={false} />
              <div className="d-grid mt-3">
                <button
                  className={`btn ${styles.btn} py-2 text-uppercase fw-bold btn-outline-secondary text-primary w-100 mt-3`}
                  onClick={() => setShowEditTaskModal(true)}
                >
                  add task
                </button>
              </div>
            </div>
          </div>
        ))}
      </main>
      {/* Edit Task Modal */}
      <ReusableModal
        show={showEditTaskModal}
        title="Edit Task"
        onClose={() => setShowEditTaskModal(false)}
        confirmText="OK"
      >
        <EditTaskModal
          focusOnComments={false} // Pass focusOnComments
          focusOnFiles={false} // Pass focusOnFiles
        />
      </ReusableModal>
    </div>
  );
};
export default Tasks;
