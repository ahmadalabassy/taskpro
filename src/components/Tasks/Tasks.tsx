import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import TaskCard from "../TaskCard/TaskCard";
import styles from "./Tasks.module.css";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import ReusableModal from "../ReusableModal/ReusableModal";
import EditTaskModal from "../TaskEditModal/TaskEditModal";
import { faker } from "@faker-js/faker";

const Tasks = () => {
  const [showEditTaskModal, setShowEditTaskModal] = useState(false);

  const generateMockTasks = (count: number): Task[] => {
    return Array.from({ length: count }, () => ({
      id: faker.number.int({ min: 1, max: 100000000 }),
      title: faker.lorem.words(3),
      description: faker.lorem.sentence(),
      dueDate: faker.date.future().toISOString().split("T")[0],
      priority: faker.helpers.arrayElement(["Low", "Medium", "High"]),
      status: faker.helpers.arrayElement([
        "Planned",
        "In Progress",
        "Completed",
        "On Pause",
        "Under Review",
      ]),
      assignedTo: faker.person.fullName(),
      comments: Array.from({ length: 3 }, () => faker.lorem.sentence()),
      files: [],
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

  const tasks = generateMockTasks(10);

  // Group tasks by their status
  const groupedTasks = tasks.reduce(
    (acc, task) => {
      if (!acc[task.status]) {
        acc[task.status] = [];
      }
      acc[task.status].push(task);
      return acc;
    },
    {} as Record<string, Task[]>
  );

  // Define colors for each task status
  const statusColors: Record<string, string> = {
    Planned: "#e493d8ab",
    "In Progress": "#93d8e4ab",
    Completed: "#93e4ab",
    "On Pause": "#e4d893ab",
    "Under Review": "#FF6B56",
  };
  return (
    <div className={`container p-4 ${styles.bgHeight}`}>
      <ButtonGroup data={tasks} setData={() => {}} />
      <main className={`${styles.scroll} row flex-md-nowrap px-3 px-md-0`}>
        {Object.entries(groupedTasks).map(([status, tasks]) => (
          <div className={`col-12 col-md-6 col-xl-4 mb-4`} key={status}>
            <div
              className={`${styles.heightFit} ${styles.tasksBG} p-3 p-lg-4 rounded-3 shadow-sm`}
            >
              {/* Title Section */}
              <div className="d-flex flex-row justify-content-between align-items-center mb-3">
                <div className="d-flex flex-row justify-content-start align-items-center gap-2">
                  <span
                    className={`${styles.rectangle} rounded-2`}
                    style={{ backgroundColor: statusColors[status] || "#ccc" }}
                  ></span>
                  <h2 className={`fw-bold fs-5 mb-0 ${styles.textColor}`}>
                    {status}
                  </h2>
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
                        Something else
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Task Cards Section */}
              {tasks.map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  focusOnComments={false}
                  focusOnFiles={false}
                />
              ))}
              {/* Add Task Button */}
              <div className="d-grid mt-3">
                <button
                  className={`btn ${styles.btn} ${styles.addTask} py-2 text-uppercase fw-bold btn-outline-secondary text-primary w-100 mt-3`}
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
        <EditTaskModal focusOnComments={false} focusOnFiles={false} />
      </ReusableModal>
    </div>
  );
};

export default Tasks;
