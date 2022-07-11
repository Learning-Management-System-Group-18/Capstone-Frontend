import React from "react";
import { Modal } from "react-bootstrap";
import ReactPlayer from "react-player/lazy";

function Index({ handleClose, showPreview, data, type }) {
  console.log(data);
  console.log(type);

  const link = data.link;

  return (
    <div>
      <Modal
        show={showPreview}
        onHide={handleClose}
        size="lg"
        backdrop="static"
      >
        <Modal.Body className="mx-3 my-2">
          <div
            onClick={handleClose}
            className="heading_5"
            style={{ cursor: "pointer" }}
          >
            X Close
          </div>

          <div className="d-flex align-items-center preview">
            {type === "video" ? (
              <ReactPlayer
                url={link}
                width={"100%"}
                className="my-3 react-player"
                light={true}
                controls={true}
                previewTabIndex={1}
              />
            ) : (
              <iframe
                src={link}
                width="100%"
                height="500px"
                className="my-3"
              ></iframe>
            )}
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Index;
