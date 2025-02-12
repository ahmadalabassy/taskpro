import "./tasks.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import UserProfile from "../../modals/UserProfile";
import ReusableModal from "../../modals/ReusableModal";
import Card from "react-bootstrap/Card";

const Tasks = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [showCommentsModal, setShowCommentsModal] = useState(false);
  const [showFilesModal, setShowFilesModal] = useState(false);

  const [comments, setComments] = useState<string[]>([]);
  const [files, setFiles] = useState<File[]>([]);

  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <>
      <div className="container">
      <Card style={{ width: '25rem' }}>
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
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
            consequuntur consequatur praesentium culpa.
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
