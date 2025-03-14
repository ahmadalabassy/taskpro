import React from "react";
import { Modal, Button } from "react-bootstrap";

interface ModalProps {
  show: boolean;
  title: string;
  children: React.ReactNode;
  onClose: () => void;
  onConfirm?: () => void;
  confirmText?: string;
  closeText?: string;
  disableConfirm?: boolean;
}

/**
 * A reusable modal component that can be used to display any information or confirm an action. The component takes in a `show` boolean to determine whether the modal should be shown or not, a `title` string to display the title of the modal, a `children` ReactNode to display the content of the modal, and an `onClose` function to close the modal.
 * An optional `onConfirm` function can be passed to confirm the action and an optional `confirmText` string can be passed to customize the confirm button text.
 * An optional `closeText` string can be passed to customize the close button text. An optional `disableConfirm` boolean can be passed to disable the confirm button.
 */
const ReusableModal = ({
  show,
  title,
  children,
  onClose,
  onConfirm,
  confirmText = "Confirm",
  closeText = "Close",
  disableConfirm = false,
}: ModalProps) => {
  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          {closeText}
        </Button>
        {onConfirm && (
          <Button
            variant="primary"
            onClick={onConfirm}
            disabled={disableConfirm}
          >
            {confirmText}
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default ReusableModal;
