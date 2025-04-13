import styles from "./TaskPreview.module.css";

interface TaskPreviewProps {
  title: string;
  category: string;
  tasks: {
    label: string;
    count: number;
  }[];
  users: string[]; // Array of user image URLs
}

const TaskPreview: React.FC<TaskPreviewProps> = ({
  title,
  category,
  tasks,
  users,
}) => {
  return (
    <div className={styles.taskPreview}>
      <div className={`d-flex align-items-center mb-3`}>
        <div className={`${styles.icon} me-3 rounded-2`}></div>
        <div className="d-flex flex-row gap-2">
          <h5 className={styles.title}>{title}</h5>
          <span className={styles.category}>({category})</span>
        </div>
      </div>
      <div className={styles.tasks}>
        {tasks.map((task, index) => (
          <div key={index} className={styles.taskRow}>
            <span>{task.label}</span>
            <span>{task.count}</span>
          </div>
        ))}
      </div>
      <div className={styles.users}>
        {users.map((user, index) => (
          <img
            key={index}
            src={user}
            alt={`User ${index + 1}`}
            className={styles.userImage}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskPreview;
