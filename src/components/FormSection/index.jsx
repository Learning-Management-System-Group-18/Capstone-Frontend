import React, { useState } from "react";
import { useEffect } from "react";
import { Form, Modal } from "react-bootstrap";
import { AiOutlineArrowLeft } from "react-icons/ai";
import "./style.css";

function Index({
  handleClose,
  handleShow,
  show,
  setShow,
  modalType,
  edit,
  tambah,
}) {
  const newSection = {
    title: "",
    description: "",
    link: "",
  };

  const [data, setData] = useState(newSection);
  const [edits, setEdit] = useState(edit);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    const newData = {
      title: data.title,
      description: data.description,
      link: data.link,
      jenis: modalType,
    };

    if (edits) {
      console.log("halo edit");
    } else {
      tambah(newData);
    }
    resetForm();
    event.preventDefault();
  };

  const resetForm = () => {
    setData(newSection);
  };

  useEffect(() => {
    const updateForm = () => {
      if (edit) {
        setData(edit);
        setEdit(edit);
      } else {
        resetForm();
      }
    };
    updateForm();
  }, [edit]);

  return (
    <div>
      {console.log(show)}
      <Modal show={show} onHide={handleClose} size="lg" backdrop="static">
        <Modal.Body className="m-5">
          <div className="d-flex justify-content-start mb-4">
            <button type="submit" onClick={handleClose} className="arrow-back ">
              <AiOutlineArrowLeft />
            </button>
            <h1>
              {edit ? "Edit" : "Upload"} {modalType}
            </h1>
          </div>
          <form onSubmit={handleSubmit}>
            <Form.Label className="title">Input Title</Form.Label>
            <div className="mb-3 text-start">
              <input
                type="text"
                placeholder={`Enter ${modalType} Tittle`}
                className="form-control mr-3 mb-4"
                name="title"
                required
                onChange={handleInput}
                value={data.title}
              ></input>
            </div>
            <Form.Label className="title">Input Description</Form.Label>
            <div className="mb-3 text-start">
              <textarea
                type="text"
                placeholder="Type something here"
                className="form-control mr-3 mb-4"
                name="description"
                rows={5}
                required
                onChange={handleInput}
                value={data.description}
              ></textarea>
            </div>

            <Form.Label className="title">Input Link {modalType}</Form.Label>
            <div className="mb-3 text-start">
              <input
                type="text"
                placeholder={`Enter link ${modalType}`}
                className="form-control mr-3 mb-4"
                name="link"
                rows={5}
                required
                onChange={handleInput}
                value={data.link}
              ></input>
            </div>
            <div className=" d-flex justify-content-center">
              <button
                type="submit"
                className="upload-button mt-5"
                onClick={handleClose}
              >
                {edit ? "Save Changes" : `Upload${modalType}`}
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Index;
