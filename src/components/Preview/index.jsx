import React from "react";
import { Modal } from "react-bootstrap";

function Index({
  handleClose,
  handlePreview,
  showPreview,
  setShowPreview,
  modalType,
  edit,
  tambah,
  show,
}) {
  return (
    <div>
      <Modal
        show={showPreview}
        onHide={handleClose}
        size="lg"
        backdrop="static"
      >
        <Modal.Body className="m-5">
          <div className="d-flex justify-content-start mb-4">
            <button type="submit" onClick={handleClose} className="arrow-back ">
              Close
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Index;
