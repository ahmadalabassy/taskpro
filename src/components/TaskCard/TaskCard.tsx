import { useEffect, useState } from "react";
import styles from "./TaskCard.module.css";
import ReusableModal from "../ReusableModal/ReusableModal.tsx";
import { Button, Card } from "react-bootstrap";
import Profile from "../Profile/Profile.tsx";
import EditTaskModal from "../TaskEditModal/TaskEditModal.tsx";
import { faker } from "@faker-js/faker";

export interface TaskCardProps {
  task: Task;
  focusOnComments?: boolean;
  focusOnFiles?: boolean;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const [showEditTaskModal, setShowEditTaskModal] = useState(false);
  const [showAddUserModal, setShowAddUserModal] = useState(false); // State for showing the "Add User" modal
  const [users, setUsers] = useState<User[]>([]); // State to store users fetched from the database
  const [selectedUsers, setSelectedUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const [focusOnFiles, setFocusOnFiles] = useState(false); // State for focusing on files
  const [focusOnComments, setFocusOnComments] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false); // State for focusing on comments
  const [comments] = useState(task.comments);
  const [files] = useState(task.files);

  // Function to generate mock users using faker.js
  const fetchUsers = async () => {
    try {
      const mockData = Array.from({ length: 10 }, (_, index) => ({
        id: index + 1,
        name: faker.person.fullName(),
        email: faker.internet.email(),
        image: faker.image.avatar(),
        role: faker.person.jobTitle(),
        phone: faker.phone.number(),
        address: faker.location.streetAddress(),
        department: faker.commerce.department(),
        plannedLeavesDate: [faker.date.future().toISOString().split("T")[0]],
        active: faker.datatype.boolean(),
        joinDate: faker.date.past().toISOString().split("T")[0],
      }));
      setUsers(mockData);
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

  const handleShowProfile = (user: User) => {
    setSelectedUser(user);
    setShowProfileModal(true);
  };
  return (
    <div>
      <Card className={`${styles.card} mb-4 border-0`}>
        <Card.Body className="text-start lh-sm px-4 py-2">
          <div className="d-flex flex-row justify-content-between align-items-center">
            <Card.Title className={`${styles.titleColor} mb-0 fw-bold`}>
              {task.title}
            </Card.Title>
            <Button
              className={`${styles.primaryText}`}
              variant="link"
              onClick={() => setShowEditTaskModal(true)}
            >
              <i className="bi bi-pencil"></i>
            </Button>
          </div>
          <Card.Text className={`${styles.primaryText} mt-3`}>
            {task.description}
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
                    src={user.image}
                    alt={user.name}
                    title={user.name}
                    className={`${styles.userImage} rounded-circle`}
                    style={{ marginRight: "-0.4rem" }}
                    onClick={() => handleShowProfile(user)}
                  />
                </div>
              ))}

              <Button
                className={`rounded-circle ${styles.addUser} ${styles.btnPrimary} ms-1 d-flex justify-content-center align-items-center`}
                onClick={() => setShowAddUserModal(true)} // Open the "Add User" modal
              >
                <i className="bi bi-plus text-primary"></i>
              </Button>
              {/* Profile Modal */}
              {selectedUser && showProfileModal && (
                <Profile
                  Show={showProfileModal}
                  onHide={() => setShowProfileModal(false)} // Close the Profile modal
                  id={selectedUser.id}
                  name={selectedUser.name}
                  email={selectedUser.email}
                  image={selectedUser.image}
                  role={selectedUser.role}
                  phone={selectedUser.phone}
                  address={selectedUser.address}
                  department={selectedUser.department}
                  plannedLeavesDate={selectedUser.plannedLeavesDate}
                  active={selectedUser.active}
                  joinDate={selectedUser.joinDate}
                />
              )}
            </div>
            <div
              className={`${styles.comments}  d-flex flex-row align-items-center gap-1`}
              onClick={handleOpenCommentsModal} // Open modal and focus on comments
            >
              <button
                className={`${styles.comment} bg-transparent rounded-circle btn-sm p-0 border-0`}
              >
                <i className={`${styles.primaryText} bi bi-chat-dots`}></i>
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
                      src={user.image}
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
