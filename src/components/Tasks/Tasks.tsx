import "./tasks.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import UserProfile from "../UserProfile/UserProfile.tsx";
import ReusableModal from "../ReusableModal/ReusableModal.tsx";
import Card from "react-bootstrap/Card";
// import ReusableModal from "./../../../ReusableModal/ReusableModal";

const Tasks = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [showCommentsModal, setShowCommentsModal] = useState(false);
  const [showFilesModal, setShowFilesModal] = useState(false);
  const [taskName, setTaskName] = useState<string | null>(null); // to store the name of the task from the database
  const [comments, setComments] = useState<string[]>([]); // to simulate comments from the database
  const [files, setFiles] = useState<File[]>([]); // to simulate files from the database

  function getBackgroundColor(task: string | null): string {
    return task ? "#B5E4CA" : "#CABDFF";
  }

  return (
    <>
      <div className="container tasks-bg p-3">
        <main className="p-4">
          <div className="d-flex flex-row justify-content-between align-items-center py-3 heading w-100">
            <div className="d-flex flex-row justify-content-start align-items-center">
              <span
                id="rectangle"
                className="rounded-2"
                style={{ backgroundColor: getBackgroundColor(taskName) }}
              ></span>
              <h2 className="ms-3 fw-bold mb-0">Planned</h2>
            </div>
            <div className="dropdown">
              <button
                className="btn "
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-three-dots-vertical fs-2"></i>
              </button>
              <ul className="dropdown-menu">
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
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <Card className="mb-4" style={{ width: "25rem" }}>
            <Card.Body className="text-start lh-sm">
              <div className="d-flex flex-row justify-content-between align-items-center">
                <Card.Title className="mb-0 fw-bold">UX Research</Card.Title>
                <Button
                  className="edit text-black"
                  variant="link"
                  onClick={() => setActiveModal("modal1")}
                >
                  <i className="bi bi-pencil"></i>
                </Button>
              </div>
              <Card.Text className="mt-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dolorem consequuntur consequatur praesentium culpa.
              </Card.Text>
              <div className="d-flex flex-row primary-text justify-content-between">
                <div className="users d-flex flex-row align-items-center">
                  <button
                    className="user bg-transparent rounded-circle btn-sm p-0"
                    onClick={() => setActiveModal("modal2")}
                  >
                    <img
                      className="width-100 rounded-circle"
                      src="https://placehold.co/25x25"
                      alt=""
                    />
                  </button>
                  <Button className="rounded-circle add-user ms-1 d-flex justify-content-center align-items-center">
                    <i className="bi bi-plus text-primary"></i>
                  </Button>
                </div>
                <div
                  className="comments d-flex flex-row align-items-center gap-1"
                  onClick={() => setShowCommentsModal(true)}
                >
                  <button className="comment bg-transparent rounded-circle btn-sm p-0">
                    <i className="bi bi-chat-dots primary-text"></i>
                  </button>
                  <span>{comments.length} comments</span>
                </div>
                <div
                  className="attached-files d-flex flex-row  align-items-center gap-1"
                  onClick={() => setShowFilesModal(true)}
                >
                  <button className="file bg-transparent rounded-circle btn-sm p-0">
                    <i className="bi bi-paperclip primary-text"></i>
                  </button>
                  <span>{files.length} files</span>
                </div>
              </div>
            </Card.Body>
          </Card>
        </main>
      </div>
      {/* Comments Modal */}
      <ReusableModal
        show={showCommentsModal}
        title="Comments"
        onClose={() => setShowCommentsModal(false)}
        confirmText="OK"
      >
        <p>This is the comments Modal </p>
      </ReusableModal>
      {/* Files Modal */}
      <ReusableModal
        show={showFilesModal}
        title="Attached Files"
        onClose={() => setShowFilesModal(false)}
        confirmText="OK"
      >
        <p>This is the files Modal </p>
      </ReusableModal>
      <Modal show={activeModal !== null} onHide={() => setActiveModal(null)}>
        <Modal.Header closeButton>
          <Modal.Title>
            {activeModal === "modal1" ? "Modal 1" : "User Profile"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {activeModal === "modal1" ? (
            "This is the first modal."
          ) : (
            <UserProfile />
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setActiveModal(null)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => setActiveModal(null)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Tasks;
