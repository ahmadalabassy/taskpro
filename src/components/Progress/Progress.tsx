import { Col, Container, Row } from "react-bootstrap";
import ProgressStateCard from "../ProgressStateCard/ProgressStateCard";
import styles from "./Progress.module.css";
import TasksProgress from "./../TasksProgress/TasksProgress";

const mockTasks: Tasks[] = [
  {
    id: 1,
    title: "Website Redesign",
    status: "in-progress",
    progress: 70,
    members: [
      {
        id: 13212321321,
        name: "John Doe",
        role: "Senior Designer",
        email: "john.doe@example.com",
        image: "/default-profile-img.svg",
        supervisor: "Jane Smith",
        phone: "555-123-4567",
        department: "UI/UX",
        address: "123 Main St, New York, NY",
        active: true,
        plannedLeavesDate: "2025-05-15",
        joinDate: "2022-01-10",
        comments: ["Great work on the homepage redesign"],
        createdAt: "2022-01-10T09:00:00Z",
        updatedAt: "2025-02-15T14:30:00Z",
      },
      {
        id: 2321312,
        name: "Aya Khan",
        role: "Project Manager",
        email: "jane.smith@example.com",
        image: "/default-profile-img.svg",
        supervisor: "Michael Johnson",
        phone: "555-987-6543",
        department: "Project Management",
        address: "456 Oak Ave, San Francisco, CA",
        active: true,
        plannedLeavesDate: "2025-06-20",
        joinDate: "2021-11-05",
        comments: ["Excellent leadership on the website project"],
        createdAt: "2021-11-05T10:15:00Z",
        updatedAt: "2025-02-10T11:45:00Z",
      },
    ],
    dueDate: new Date("2025-03-08"),
  },
  {
    id: 2,
    title: "Mobile App Development",
    status: "on-hold",
    progress: 30,
    members: [
      {
        id: 22,
        name: "Jane Smith",
        role: "Project Manager",
        email: "jane.smith@example.com",
        image: "/default-profile-img.svg",
        supervisor: "Michael Johnson",
        phone: "555-987-6543",
        department: "Project Management",
        address: "456 Oak Ave, San Francisco, CA",
        active: true,
        plannedLeavesDate: "2025-06-20",
        joinDate: "2021-11-05",
        comments: ["Excellent leadership on the website project"],
        createdAt: "2021-11-05T10:15:00Z",
        updatedAt: "2025-02-10T11:45:00Z",
      },
      {
        id: 4,
        name: "doe john",
        role: "Project Manager",
        email: "jane.smith@example.com",
        image: "/default-profile-img.svg",
        supervisor: "Michael Johnson",
        phone: "555-987-6543",
        department: "Project Management",
        address: "456 Oak Ave, San Francisco, CA",
        active: true,
        plannedLeavesDate: "2025-06-20",
        joinDate: "2021-11-05",
        comments: ["Excellent leadership on the website project"],
        createdAt: "2021-11-05T10:15:00Z",
        updatedAt: "2025-02-10T11:45:00Z",
      },
    ],
    dueDate: new Date("2025-03-15"),
  },
  {
    id: 3,
    title: "Marketing Campaign",
    status: "completed",
    progress: 100,
    members: [
      {
        id: 22,
        name: "mohameed ",
        role: "Project Manager",
        email: "jane.smith@example.com",
        image: "/default-profile-img.svg",
        supervisor: "Michael Johnson",
        phone: "555-987-6543",
        department: "Project Management",
        address: "456 Oak Ave, San Francisco, CA",
        active: true,
        plannedLeavesDate: "2025-06-20",
        joinDate: "2021-11-05",
        comments: ["Excellent leadership on the website project"],
        createdAt: "2021-11-05T10:15:00Z",
        updatedAt: "2025-02-10T11:45:00Z",
      },
      {
        id: 4,
        name: "Ahmed Ali",
        role: "Project Manager",
        email: "jane.smith@example.com",
        image: "/default-profile-img.svg",
        supervisor: "Michael Johnson",
        phone: "555-987-6543",
        department: "Project Management",
        address: "456 Oak Ave, San Francisco, CA",
        active: true,
        plannedLeavesDate: "2025-06-20",
        joinDate: "2021-11-05",
        comments: ["Excellent leadership on the website project"],
        createdAt: "2021-11-05T10:15:00Z",
        updatedAt: "2025-02-10T11:45:00Z",
      },
    ],
    completedDate: new Date("2025-03-01"),
  },
  {
    id: 4,
    title: "Product Launch",
    status: "in-progress",
    progress: 45,
    members: [
      {
        id: 22,
        name: "Alaa Mohamed",
        role: "Project Manager",
        email: "jane.smith@example.com",
        image: "/default-profile-img.svg",
        supervisor: "Michael Johnson",
        phone: "555-987-6543",
        department: "Project Management",
        address: "456 Oak Ave, San Francisco, CA",
        active: true,
        plannedLeavesDate: "2025-06-20",
        joinDate: "2021-11-05",
        comments: ["Excellent leadership on the website project"],
        createdAt: "2021-11-05T10:15:00Z",
        updatedAt: "2025-02-10T11:45:00Z",
      },
      {
        id: 22,
        name: "Alaa Mohamed",
        role: "Project Manager",
        email: "jane.smith@example.com",
        image: "/default-profile-img.svg",
        supervisor: "Michael Johnson",
        phone: "555-987-6543",
        department: "Project Management",
        address: "456 Oak Ave, San Francisco, CA",
        active: true,
        plannedLeavesDate: "2025-06-20",
        joinDate: "2021-11-05",
        comments: ["Excellent leadership on the website project"],
        createdAt: "2021-11-05T10:15:00Z",
        updatedAt: "2025-02-10T11:45:00Z",
      },
      {
        id: 22,
        name: "Alaa Mohamed",
        role: "Project Manager",
        email: "jane.smith@example.com",
        image: "/default-profile-img.svg",
        supervisor: "Michael Johnson",
        phone: "555-987-6543",
        department: "Project Management",
        address: "456 Oak Ave, San Francisco, CA",
        active: true,
        plannedLeavesDate: "2025-06-20",
        joinDate: "2021-11-05",
        comments: ["Excellent leadership on the website project"],
        createdAt: "2021-11-05T10:15:00Z",
        updatedAt: "2025-02-10T11:45:00Z",
      },
      {
        id: 22,
        name: "Alaa Mohamed",
        role: "Project Manager",
        email: "jane.smith@example.com",
        image: "/default-profile-img.svg",
        supervisor: "Michael Johnson",
        phone: "555-987-6543",
        department: "Project Management",
        address: "456 Oak Ave, San Francisco, CA",
        active: true,
        plannedLeavesDate: "2025-06-20",
        joinDate: "2021-11-05",
        comments: ["Excellent leadership on the website project"],
        createdAt: "2021-11-05T10:15:00Z",
        updatedAt: "2025-02-10T11:45:00Z",
      },
      {
        id: 22,
        name: "Alaa Mohamed",
        role: "Project Manager",
        email: "jane.smith@example.com",
        image: "/default-profile-img.svg",
        supervisor: "Michael Johnson",
        phone: "555-987-6543",
        department: "Project Management",
        address: "456 Oak Ave, San Francisco, CA",
        active: true,
        plannedLeavesDate: "2025-06-20",
        joinDate: "2021-11-05",
        comments: ["Excellent leadership on the website project"],
        createdAt: "2021-11-05T10:15:00Z",
        updatedAt: "2025-02-10T11:45:00Z",
      },
      {
        id: 4,
        name: "Raed Ali",
        role: "Project Manager",
        email: "jane.smith@example.com",
        image: "/default-profile-img.svg",
        supervisor: "Michael Johnson",
        phone: "555-987-6543",
        department: "Project Management",
        address: "456 Oak Ave, San Francisco, CA",
        active: false,
        plannedLeavesDate: "2025-06-20",
        joinDate: "2021-11-05",
        comments: ["Excellent leadership on the website project"],
        createdAt: "2021-11-05T10:15:00Z",
        updatedAt: "2025-02-10T11:45:00Z",
      },
    ],
    dueDate: new Date("2025-04-10"),
  },
  {
    id: 5,
    title: "User Research",
    status: "on-hold",
    progress: 60,
    members: [
      {
        id: 22,
        name: "Ahmed Alabasy",
        role: "Project Manager",
        email: "jane.smith@example.com",
        image: "/default-profile-img.svg",
        supervisor: "Michael Johnson",
        phone: "555-987-6543",
        department: "Project Management",
        address: "456 Oak Ave, San Francisco, CA",
        active: false,
        plannedLeavesDate: "2025-06-20",
        joinDate: "2021-11-05",
        comments: ["Excellent leadership on the website project"],
        createdAt: "2021-11-05T10:15:00Z",
        updatedAt: "2025-02-10T11:45:00Z",
      },
      {
        id: 4,
        name: "fares elabasery",
        role: "Project Manager",
        email: "jane.smith@example.com",
        image: "/default-profile-img.svg",
        supervisor: "Michael Johnson",
        phone: "555-987-6543",
        department: "Project Management",
        address: "456 Oak Ave, San Francisco, CA",
        active: true,
        plannedLeavesDate: "2025-06-20",
        joinDate: "2021-11-05",
        comments: ["Excellent leadership on the website project"],
        createdAt: "2021-11-05T10:15:00Z",
        updatedAt: "2025-02-10T11:45:00Z",
      },
    ],
    dueDate: new Date("2025-03-22"),
  },
  {
    id: 6,
    title: "Content Strategy",
    status: "completed",
    progress: 100,
    members: [
      {
        id: 22,
        name: "Mohamed Elabasy",
        role: "Project Manager",
        email: "jane.smith@example.com",
        image: "/default-profile-img.svg",
        supervisor: "Michael Johnson",
        phone: "555-987-6543",
        department: "Project Management",
        address: "456 Oak Ave, San Francisco, CA",
        active: true,
        plannedLeavesDate: "2025-06-20",
        joinDate: "2021-11-05",
        comments: ["Excellent leadership on the website project"],
        createdAt: "2021-11-05T10:15:00Z",
        updatedAt: "2025-02-10T11:45:00Z",
      },
      {
        id: 4,
        name: "Ahmed Alabasy",
        role: "Project Manager",
        email: "jane.smith@example.com",
        image: "/default-profile-img.svg",
        supervisor: "Michael Johnson",
        phone: "555-987-6543",
        department: "Project Management",
        address: "456 Oak Ave, San Francisco, CA",
        active: true,
        plannedLeavesDate: "2025-06-20",
        joinDate: "2021-11-05",
        comments: ["Excellent leadership on the website project"],
        createdAt: "2021-11-05T10:15:00Z",
        updatedAt: "2025-02-10T11:45:00Z",
      },
    ],
    completedDate: new Date("2025-02-15"),
  },
];

export default function Progress() {
  const totalTasks = 248;
  const inProgressTasks = 45;
  const completedTasks = 182;
  return (
    <div className={styles.progressPage}>
      <Row className={styles.statsSection}>
        <Col md={4}>
          <ProgressStateCard
            title="Total Tasks"
            value={totalTasks}
            comparison={{ value: 12, trend: "up", text: "vs last week" }}
            icon={<i className={`bi bi-list-ul ${styles.listIcon} `}></i>}
          />
        </Col>
        <Col md={4}>
          <ProgressStateCard
            title="In Progress"
            value={inProgressTasks}
            comparison={{ value: 8, trend: "down", text: "vs last week" }}
            icon={<i className={`bi bi-activity ${styles.progressIcon}`}></i>}
          />
        </Col>
        <Col md={4}>
          <ProgressStateCard
            title="Completed"
            value={completedTasks}
            comparison={{ value: 24, trend: "up", text: "vs last week" }}
            icon={<i className={`bi bi-check-lg ${styles.checkIcon}`}></i>}
          />
        </Col>
      </Row>
      <div className={styles.tasksSection}>
        <div className={styles.sectionHeader}>
          <h2>Tasks Progress</h2>
          <button className={styles.moreButton}>⋮</button>
        </div>
        <Row className={styles.taskGrid}>
          {mockTasks.map((task) => (
            <Col key={task.id} lg={12} xl={6} className={styles.taskColumn}>
              <TasksProgress task={task} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
