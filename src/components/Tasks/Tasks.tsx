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

const generateMockTasks = (count: number): TaskData[] => {
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
      plannedLeavesDate: [faker.date.future().toISOString().split("T")[0]],
      joinDate: faker.date.past().toISOString().split("T")[0],
    })),
    completedDate: faker.helpers.arrayElement([
      "",
      faker.date.future().toISOString().split("T")[0],
    ]),
  }));
};

const Tasks = () => {
  const [showEditTaskModal, setShowEditTaskModal] = useState(false);
  const [tasks, setTasks] = useState<TaskData[]>(generateMockTasks(10)); // Store tasks in state
  const [viewMode, setViewMode] = useState<"list" | "grid">("list"); // View mode
  const [selectedTasks, setSelectedTasks] = useState<number[]>([]); // Selected task IDs

  // Group tasks by their status
  const groupedTasks = tasks.reduce((acc, task) => {
    if (!acc[task.status]) {
      acc[task.status] = [];
    }
    acc[task.status].push(task);
    return acc;
  }, {} as Record<string, TaskData[]>);

  // Define colors for each task status
  const statusColors: Record<string, string> = {
    Planned: "#e493d8ab",
    "In Progress": "#93d8e4ab",
    Completed: "#93e4ab",
    "On Pause": "#e4d893ab",
    "Under Review": "#FF6B56",
  };

  // Handle Select All / Deselect All
  const handleSelectAll = () => {
    if (selectedTasks.length === tasks.length) {
      setSelectedTasks([]); // Deselect all tasks
    } else {
      const allTaskIds = tasks.map((task) => task.id); // Get all task IDs
      setSelectedTasks(allTaskIds); // Select all tasks
    }
  };

  // Handle Sort
  const handleSort = (field: keyof TaskData, direction: "asc" | "desc") => {
    const sortedTasks = [...tasks].sort((a, b) => {
      const fieldA = a[field]?.toString().toLowerCase() || "";
      const fieldB = b[field]?.toString().toLowerCase() || "";

      if (fieldA < fieldB) return direction === "asc" ? -1 : 1;
      if (fieldA > fieldB) return direction === "asc" ? 1 : -1;
      return 0;
    });
    setTasks(sortedTasks);
  };

  // Handle Filter
  const handleFilter = (field: keyof TaskData, value: string) => {
    if (!value.trim()) {
      // Reset to original tasks if filter is empty
      setTasks(generateMockTasks(10)); // Regenerate tasks
      return;
    }

    const filteredTasks = tasks.filter((task) => {
      const fieldValue = task[field];
      return fieldValue?.toString().toLowerCase().includes(value.toLowerCase());
    });

    setTasks(filteredTasks);
  };

  // Handle View Change
  const handleViewChange = (mode: "list" | "grid") => {
    setViewMode(mode);
  };

  return (
    <div className={`container p-4 ${styles.bgHeight}`}>
      <ButtonGroup
        data={tasks}
        setData={setTasks}
        onSort={handleSort}
        onFilter={handleFilter}
        onSelectAll={handleSelectAll}
        onViewChange={handleViewChange}
      />
      <main 
      className={`${
        viewMode === "list"
          ? `${styles.scroll} row flex-md-nowrap px-3 px-md-0 flex-column`
          : `${styles.scroll} row flex-md-nowrap px-3 px-md-0`
      }`}
      >
        {Object.entries(groupedTasks).map(([status, tasks]) => (
          <div className={`${
            viewMode === "list"
              ? "col-12 mb-3"
              : "col-12 col-md-6 col-xl-4 mb-4"
          }`} key={status}>
            <div
              className={`${styles.heightFit} ${styles.tasksBG} p-3 p-lg-4 rounded-3 shadow-sm`}
            >
              {/* Title Section */}
              <div className="d-flex flex-row justify-content-between align-items-center mb-3">
                <div className="d-flex flex-row justify-content-start align-items-center gap-2">
                  <span
                    className={`${styles.rectangle} rounded-2`}
                    style={{
                      backgroundColor: statusColors[status] || "#ccc",
                    }}
                  ></span>
                  <h2 className={`fw-bold fs-5 mb-0 ${styles.textColor}`}>
                    {status}
                  </h2>
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