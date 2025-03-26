import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import styles from "./TaskCard.module.css";
import ReusableModal from "../ReusableModal/ReusableModal.tsx";
import { Button, Card } from "react-bootstrap";
import UserProfile from "../UserProfile/UserProfile.tsx";

interface Task {
  name: string;
  comments: string[];
  files: { name: string }[];
}

interface TaskCardProps {
  task: Task;
}
const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const [showCommentsModal, setShowCommentsModal] = useState(false);
  const [showFilesModal, setShowFilesModal] = useState(false);
  const [showEditTaskModal, setShowEditTaskModal] = useState(false);
  const [showUserProfileModal, setShowUserProfileModal] = useState(false);
  const [taskName, setTaskName] = useState(task.name);
  const [comments, setComments] = useState(task.comments);
  const [files, setFiles] = useState(task.files);
  return (
    <div>
      <Card className="mb-4">
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
          <Card.Text className="mt-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
            consequuntur consequatur praesentium culpa.
          </Card.Text>
          <div
            className={`d-flex flex-row ${styles.primaryText} justify-content-between`}
          >
            <div
              className={`${styles.users} d-flex flex-row align-items-center`}
            >
              <button
                className={`${styles.user} bg-transparent rounded-circle btn-sm p-0 border-0`}
                onClick={() => setShowUserProfileModal(true)}
              >
                <img
                  className="width-100 rounded-circle"
                  src="https://placehold.co/25x25"
                  alt=""
                />
              </button>
              <Button
                className={`rounded-circle ${styles.addUser} ${styles.btnPrimary} ms-1 d-flex justify-content-center align-items-center`}
              >
                <i className="bi bi-plus text-primary"></i>
              </Button>
            </div>
            <div
              className={`${styles.comments}  d-flex flex-row align-items-center gap-1`}
              onClick={() => setShowCommentsModal(true)}
            >
              <button
                className={`${styles.comment} bg-transparent rounded-circle btn-sm p-0 border-0`}
              >
                <i className="bi bi-chat-dots primary-text"></i>
              </button>
              <span>{comments.length} comments</span>
            </div>
            <div
              className={`${styles.attachedFiles} d-flex flex-row  align-items-center gap-1`}
              onClick={() => setShowFilesModal(true)}
            >
              <button
                className={`${styles.file}  bg-transparent rounded-circle btn-sm p-0 border-0`}
              >
                <i className={`bi bi-paperclip ${styles.primaryText}`}></i>
              </button>
              <span>{files.length} files</span>
            </div>
          </div>
        </Card.Body>
        {/* Comments Modal */}
        <ReusableModal
          show={showCommentsModal}
          title="Comments"
          onClose={() => setShowCommentsModal(false)}
          confirmText="OK"
        >
          <p>{comments.join(", ")}</p>
        </ReusableModal>

        {/* Files Modal */}
        <ReusableModal
          show={showFilesModal}
          title="Attached Files"
          onClose={() => setShowFilesModal(false)}
          confirmText="OK"
        >
          <p>{files.map((file) => file.name).join(", ")}</p>
        </ReusableModal>

        {/* Edit Task Modal */}
        <Modal
          show={showEditTaskModal}
          onHide={() => setShowEditTaskModal(false)}
        >
          <Modal.Header closeButton>
            <Modal.Title>Edit Task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input
              type="text"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => setShowEditTaskModal(false)}
            >
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => setShowEditTaskModal(false)}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

        {/* User Profile Modal */}
        <Modal
          show={showUserProfileModal}
          onHide={() => setShowUserProfileModal(false)}
        >
          <Modal.Header closeButton>
            <Modal.Title>User Profile</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <UserProfile />
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => setShowUserProfileModal(false)}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Card>
    </div>
  );
};
export default TaskCard;
