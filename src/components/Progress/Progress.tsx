import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProgressStateCard from "../ProgressStateCard/ProgressStateCard";
import styles from "./Progress.module.css";
import TasksProgress from "./../TasksProgress/TasksProgress";
import { faker } from "@faker-js/faker";

const generateMockTasks = (count: number): Task[] => {
  return Array.from({ length: count }, () => ({
    id: faker.number.int({ min: 1, max: 1000000 }),
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
    comments: Array.from({ length: faker.number.int({ min: 1, max: 3 }) }, () =>
      faker.lorem.sentence()
    ),
    files: [], // Add files (empty array for now)
    createdAt: faker.date.past().toISOString(),
    updatedAt: faker.date.recent().toISOString(),
    progress: faker.number.int({ min: 0, max: 100 }),
    members: Array.from(
      { length: faker.number.int({ min: 1, max: 5 }) },
      () => ({
        id: faker.number.int({ min: 1, max: 1000000 }),
        name: faker.person.fullName(),
        role: faker.person.jobTitle(),
        email: faker.internet.email(),
        image: faker.image.avatar(),
        supervisor: faker.person.fullName(),
        phone: faker.phone.number(),
        department: faker.commerce.department(),
        address: faker.location.streetAddress(),
        active: faker.datatype.boolean(),
        plannedLeavesDate: Array.from(
          { length: faker.number.int({ min: 1, max: 3 }) },
          () => faker.date.future().toISOString().split("T")[0]
        ),
        joinDate: faker.date.past().toISOString().split("T")[0],
        comments: Array.from(
          { length: faker.number.int({ min: 1, max: 3 }) },
          () => faker.lorem.sentence()
        ),
        createdAt: faker.date.past().toISOString(),
        updatedAt: faker.date.recent().toISOString(),
      })
    ),
    completedDate: faker.date.future().toISOString().split("T")[0],
  }));
};

const mockTasks = generateMockTasks(10); // Generate 10 tasks

const Progress: React.FC<Task> = () => {
  const totalTasks = 248;
  const inProgressTasks = 45;
  const completedTasks = 182;
  return (
    <Container className={styles.progressPage}>
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
    </Container>
  );
};
export default Progress;
