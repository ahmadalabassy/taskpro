import React, { useEffect, useState } from "react";
import styles from "./TaskCard.module.css";
import ReusableModal from "../ReusableModal/ReusableModal.tsx";
import { Button, Card } from "react-bootstrap";
import Profile from "../Profile/Profile.tsx";
import EditTaskModal from "../TaskEditModal/TaskEditModal.tsx";

interface Task {
  name: string;
  comments: string[];
  files: { name: string }[];
}

interface User {
  id: number;
  name: string;
  email: string;
  image: string;
}

interface TaskCardProps {
  task: Task;
}
const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const [showEditTaskModal, setShowEditTaskModal] = useState(false);
  const [showAddUserModal, setShowAddUserModal] = useState(false); // State for showing the "Add User" modal
  const [users, setUsers] = useState<User[]>([]); // State to store users fetched from the database
  const [selectedUsers, setSelectedUsers] = useState<User[]>([]); // State to store selected users
  const [focusOnFiles, setFocusOnFiles] = useState(false); // State for focusing on files
  const [focusOnComments, setFocusOnComments] = useState(false); // State for focusing on comments
  const [comments, setComments] = useState(task.comments);
  const [files, setFiles] = useState(task.files);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Function to handle opening the "Add User" modal
  const fetchUsers = async () => {
    try {
      const mockData = [
        {
          id: 1,
          name: "John Doe",
          email: "john.doe@example.com",
          image: "https://via.placeholder.com/50", // Replace with actual image URL
        },
        {
          id: 2,
          name: "Jane Smith",
          email: "jane.smith@example.com",
          image: "https://via.placeholder.com/50", // Replace with actual image URL
        },
        {
          id: 3,
          name: "Aya Sultan",
          email: "aya.sultan@example.com",
          image: "https://via.placeholder.com/50", // Replace with actual image URL
        },
      ];
      console.log("Mocked users:", mockData);
      setUsers(mockData); // Set the mocked users to state
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  useEffect(() => {
    if (showAddUserModal) {
      fetchUsers();
    }
  }, [showAddUserModal]);

  // Function to handle adding a user to the selected users
  const handleAddUser = (user: User) => {
    if (!selectedUsers.some((u) => u.id === user.id)) {
      setSelectedUsers((prev) => [...prev, user]);
    }
    setShowAddUserModal(false); // Close the modal after adding the user
  };
  const handleOpenCommentsModal = () => {
    setFocusOnComments(true); // Set focus on comments
    setFocusOnFiles(false); // Ensure file focus is reset
    setShowEditTaskModal(true); // Open the modal
  };

  const handleOpenFilesModal = () => {
    setFocusOnFiles(true); // Set focus on files
    setFocusOnComments(false); // Ensure comments focus is reset
    setShowEditTaskModal(true); // Open the modal
  };

  return (
    <div>
      <Card className={`${styles.card} mb-4 border-0`}>
        <Card.Body className="text-start lh-sm px-4 py-2">
          <div className="d-flex flex-row justify-content-between align-items-center">
            <Card.Title className="mb-0 fw-bold">UX Research</Card.Title>
            <Button
              className="text-black"
              variant="link"
              onClick={() => setShowEditTaskModal(true)}
            >
              <i className="bi bi-pencil"></i>
            </Button>
          </div>
          <Card.Text className="mt-3 text-secondary">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
            consequuntur consequatur praesentium culpa.
          </Card.Text>
          <div
            className={`d-flex flex-row ${styles.primaryText} justify-content-between`}
          >
            <div
              className={`${styles.users} d-flex flex-row align-items-center`}
            >
              {selectedUsers.map((user) => (
                <div key={user.id} className="d-flex align-items-center">
                  <img
                    src="./default-profile-img.svg"
                    alt={user.name}
                    className={`${styles.userImage} rounded-circle`}
                    style={{ marginRight: "-0.4rem" }}
                  />
                </div>
              ))}
              <button
                className={`${styles.user} bg-transparent rounded-circle btn-sm p-0 border-0`}
              >
                <img
                  className={styles.userImage}
                  src="./default-profile-img.svg"
                  alt="User"
                  style={{ marginRight: "0.4rem" }}
                  onClick={handleShow}
                />
                <Profile Show={show} onHide={handleClose} />
              </button>
              <Button
                className={`rounded-circle ${styles.addUser} ${styles.btnPrimary} ms-1 d-flex justify-content-center align-items-center`}
                onClick={() => setShowAddUserModal(true)} // Open the "Add User" modal
              >
                <i className="bi bi-plus text-primary"></i>
              </Button>
            </div>
            <div
              className={`${styles.comments}  d-flex flex-row align-items-center gap-1`}
              onClick={handleOpenCommentsModal} // Open modal and focus on comments
            >
              <button
                className={`${styles.comment} bg-transparent rounded-circle btn-sm p-0 border-0`}
              >
                <i className="bi bi-chat-dots primary-text"></i>
              </button>
              <span className={`${styles.fsSM}`}>
                {comments.length} comments
              </span>
            </div>
            <div
              className={`${styles.attachedFiles} d-flex flex-row  align-items-center gap-1`}
              onClick={handleOpenFilesModal} // Open modal and focus on files
            >
              <button
                className={`${styles.file}  bg-transparent rounded-circle btn-sm p-0 border-0`}
              >
                <i className={`bi bi-paperclip ${styles.primaryText}`}></i>
              </button>
              <span className={`${styles.fsSM}`}>{files.length} files</span>
            </div>
          </div>
        </Card.Body>

        {/* Add User Modal */}
        <ReusableModal
          show={showAddUserModal}
          title="Add User"
          onClose={() => setShowAddUserModal(false)} // Close the modal
          confirmText="Close"
        >
          {users.length === 0 ? (
            <p>Loading users...</p> // Show a loading message while fetching users
          ) : (
            <ul className="list-group">
              {users.map((user) => (
                <li
                  key={user.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <div
                    className="d-flex align-items-center"
                    style={{ gap: "0.5rem" }}
                  >
                    <img
                      src="./default-profile-img.svg"
                      alt={user.name}
                      className="rounded-circle"
                      style={{
                        width: "25px",
                        height: "25px",
                        objectFit: "cover",
                      }}
                    />
                    <span>
                      {user.name} ({user.email})
                    </span>
                  </div>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => handleAddUser(user)} // Add the user when clicked
                  >
                    Add
                  </Button>
                </li>
              ))}
            </ul>
          )}
        </ReusableModal>

        {/* Edit Task Modal */}
        <ReusableModal
          show={showEditTaskModal}
          title="Edit Task"
          onClose={() => {
            setShowEditTaskModal(false);
            setFocusOnComments(false); // Reset focus state
            setFocusOnFiles(false); // Reset focus state
          }}
          confirmText="OK"
        >
          <EditTaskModal
            focusOnComments={focusOnComments}
            focusOnFiles={focusOnFiles} // Pass focusOnFiles to the modal
          />
        </ReusableModal>
      </Card>
    </div>
  );
};
export default TaskCard;
