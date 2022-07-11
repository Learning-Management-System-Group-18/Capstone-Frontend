import React from "react";
import { Modal } from "react-bootstrap";

function Index({ handleClose, showPreview, data, type }) {
  console.log(data);
  console.log(type);

  const link = `${data.link}/preview`;

  return (
    <div>
      <Modal
        show={showPreview}
        onHide={handleClose}
        size="lg"
        backdrop="static"
      >
        <Modal.Body className="mx-3 my-2">
          <div onClick={handleClose} className="heading_5">
            X Close
          </div>

          <div className="preview">
            <iframe src={link} width="100%" height="500px"></iframe>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Index;
