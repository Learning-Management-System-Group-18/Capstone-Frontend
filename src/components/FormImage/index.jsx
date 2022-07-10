import React, { useState, useCallback } from "react";
import { Form, Modal } from "react-bootstrap";
import uploadIcon from "../../assets/img/upload-icon.svg";
import { Button } from "../";
import { AiOutlineArrowLeft } from "react-icons/ai";
import axiosInstance from "../../networks/apis";
import { useEffect } from "react";
import { BsFileEarmarkImage, BsCheck } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import "./style.css";

const Index = ({
  handleClose,
  show,
  modalType,
  addImgCourse,
  img,
  id,
  name,
  link,
  addMentor,
  editMentor,
  addTool,
  editTool,
}) => {
  const [file, setFile] = useState(null);
  const [mentor, setMentor] = useState("");
  const [tool, setTool] = useState("");
  const [linkDownload, setLinkDownload] = useState("");

  const handleFileUpload = async (e) => {
    if (e.target.files[0]) setFile(e.target.files[0]);
  };

  const handleCancel = (type) => {
    // type === "add" ? setData(newData) : setNewDataEdit(defaultData);
    setFile(null);
    setMentor(" ");
    setLinkDownload(" ");
    setTool(" ");
    handleClose();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (modalType === "addImgCourse" || modalType === "editImgCourse") {
      const dataImg = {
        image: file,
      };

      await addImgCourse(dataImg);

      //   console.log(dataImg);
    } else if (modalType === "addMentor") {
      const data = {
        name: mentor,
        image: file,
      };

      //   console.log(data);

      await addMentor(data);
    } else if (modalType === "editMentor") {
      //   console.log(id);
      let data = {};
      if (file === null) {
        data = {
          name: mentor,
        };
      } else {
        data = {
          name: mentor,
          image: file,
        };
      }

      await editMentor(data, id);
    } else if (modalType === "addTool") {
      const data = {
        name: tool,
        link: linkDownload,
        image: file,
      };
      console.log(data);
      await addTool(data);
    } else if (modalType === "editTool") {
      let data = {};
      if (file === null) {
        data = {
          name: tool,
          link: linkDownload,
        };
      } else {
        data = {
          name: tool,
          link: linkDownload,
          image: file,
        };
      }

      await editTool(data, id);
    }

    handleCancel();
  };

  if (modalType === "addImgCourse") {
    return (
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Body className="px-4">
            <div className="heading_5 mb-3">
              <AiOutlineArrowLeft
                className="icon-title"
                onClick={handleClose}
              />
              Upload Image Course
            </div>
            <form onSubmit={handleSubmit}>
              <Form.Label className="title-form-category">
                Upload Image
              </Form.Label>
              <div className="box-upload">
                <div className="d-flex flex-column align-items-center upload-icon">
                  <img src={uploadIcon} alt="upload-icon" />
                  <p>Drag & drop image here</p>
                </div>
                <input
                  name="image"
                  type="file"
                  onChange={handleFileUpload}
                  title="Upload Image"
                  id="uploadImage"
                  accept="image/x-png,image/gif,image/jpeg, image/jpg, image/svg"
                />
              </div>

              <div className="warpbtn-popup">
                <Button
                  type={"btn-popupcancel"}
                  onClick={() => handleCancel("add")}
                />
                <Button type={"btn-popupsave"} />
              </div>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    );
  } else if (modalType === "editImgCourse") {
    return (
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Body className="px-4">
            <div className="heading_5 mb-3">
              <AiOutlineArrowLeft
                className="icon-title"
                onClick={handleClose}
              />
              Edit Image Course
            </div>
            <form onSubmit={handleSubmit}>
              <div className="d-flex flex-column gap-2 mb-5">
                <div className="image-edit">
                  <img
                    src={file ? URL.createObjectURL(file) : img}
                    alt=""
                    className="image-before"
                  />

                  <input
                    name="image"
                    type="file"
                    className="input-edit-image-course"
                    onChange={handleFileUpload}
                    title="Upload Image"
                    accept="image/x-png,image/gif,image/jpeg, image/jpg, image/svg"
                  />
                </div>
                {file ? (
                  <div className="name-file">
                    <div className="d-flex gap-2 align-items-center fst-italic">
                      <BsFileEarmarkImage />
                      {file ? file.name : ""}
                    </div>
                    <div className="d-flex gap-2 align-items-center me-3">
                      <div className="added">
                        <BsCheck />
                        added
                      </div>
                      <AiOutlineClose onClick={() => setFile(0)} />
                    </div>
                  </div>
                ) : (
                  " "
                )}
              </div>

              <div className="warpbtn-popup mt-4">
                <Button
                  type={"btn-popupcancel"}
                  onClick={() => handleCancel("edit")}
                />
                <Button type={"btn-popupsave"} />
              </div>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    );
  } else if (modalType === "addMentor") {
    return (
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Body className="px-4">
            <div className="heading_5 mb-3">
              <AiOutlineArrowLeft
                className="icon-title"
                onClick={handleClose}
              />
              Upload Mentor
            </div>
            <form onSubmit={handleSubmit}>
              <Form.Label className="title-form-category">
                Input Name
              </Form.Label>
              <div className="mb-3 text-start">
                <input
                  type="text"
                  placeholder="Enter category title"
                  className="form-control mr-3 mb-4 radiusborder"
                  onChange={(e) => setMentor(e.target.value)}
                  value={mentor}
                  name="mentor"
                  required
                ></input>
              </div>
              <Form.Label className="title-form-category">
                Upload Image
              </Form.Label>
              <div className="box-upload">
                <div className="d-flex flex-column align-items-center upload-icon">
                  <img src={uploadIcon} alt="upload-icon" />
                  <p>Drag & drop image here</p>
                </div>
                <input
                  name="image"
                  type="file"
                  onChange={handleFileUpload}
                  title="Upload Image"
                  id="uploadImage"
                  accept="image/x-png,image/gif,image/jpeg, image/jpg, image/svg"
                />
              </div>

              <div className="warpbtn-popup">
                <Button
                  type={"btn-popupcancel"}
                  onClick={() => handleCancel("add")}
                />
                <Button type={"btn-popupsave"} />
              </div>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    );
  } else if (modalType === "editMentor") {
    // console.log(mentor);
    // setMentor(name);
    return (
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Body className="px-4">
            <div className="heading_5 mb-3">
              <AiOutlineArrowLeft
                className="icon-title"
                onClick={handleClose}
              />
              Edit Mentor
            </div>
            <form onSubmit={handleSubmit}>
              <Form.Label className="title-form-category">
                Input Name
              </Form.Label>
              <div className="mb-3 text-start">
                <input
                  type="text"
                  placeholder="Enter category title"
                  className="form-control mr-3 mb-4 radiusborder"
                  onChange={(e) => setMentor(e.target.value)}
                  value={
                    mentor === " " && name !== " " ? setMentor(name) : mentor
                  }
                  name="mentor"
                  required
                ></input>
              </div>

              <div className="d-flex flex-column gap-2 mb-5">
                <div className="image-edit">
                  <img
                    src={file ? URL.createObjectURL(file) : img}
                    alt=""
                    className="image-before"
                  />

                  <input
                    name="image"
                    type="file"
                    className="input-edit-image-course"
                    onChange={handleFileUpload}
                    title="Upload Image"
                    accept="image/x-png,image/gif,image/jpeg, image/jpg, image/svg"
                  />
                </div>
                {file ? (
                  <div className="name-file">
                    <div className="d-flex gap-2 align-items-center fst-italic">
                      <BsFileEarmarkImage />
                      {file ? file.name : ""}
                    </div>
                    <div className="d-flex gap-2 align-items-center me-3">
                      <div className="added">
                        <BsCheck />
                        added
                      </div>
                      <AiOutlineClose onClick={() => setFile(0)} />
                    </div>
                  </div>
                ) : (
                  " "
                )}
              </div>

              <div className="warpbtn-popup mt-4">
                <Button
                  type={"btn-popupcancel"}
                  onClick={() => handleCancel("edit")}
                />
                <Button type={"btn-popupsave"} />
              </div>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    );
  } else if (modalType === "addTool") {
    return (
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Body className="px-4">
            <div className="heading_5 mb-3">
              <AiOutlineArrowLeft
                className="icon-title"
                onClick={handleClose}
              />
              Upload Tool
            </div>
            <form onSubmit={handleSubmit}>
              <Form.Label className="title-form-category">
                Input Tool Name
              </Form.Label>
              <div className="mb-3 text-start">
                <input
                  type="text"
                  placeholder="Enter tool"
                  className="form-control mr-3 mb-4 radiusborder"
                  onChange={(e) => setTool(e.target.value)}
                  value={tool}
                  name="tool"
                  required
                ></input>
              </div>
              <Form.Label className="title-form-category">
                Input Link Download
              </Form.Label>
              <div className="mb-3 text-start">
                <input
                  type="link"
                  placeholder="Enter link tool"
                  className="form-control mr-3 mb-4 radiusborder"
                  onChange={(e) => setLinkDownload(e.target.value)}
                  value={linkDownload}
                  name="link"
                  required
                ></input>
              </div>
              <Form.Label className="title-form-category">
                Upload Image
              </Form.Label>
              <div className="box-upload">
                <div className="d-flex flex-column align-items-center upload-icon">
                  <img src={uploadIcon} alt="upload-icon" />
                  <p>Drag & drop image here</p>
                </div>
                <input
                  name="image"
                  type="file"
                  onChange={handleFileUpload}
                  title="Upload Image"
                  id="uploadImage"
                  accept="image/x-png,image/gif,image/jpeg, image/jpg, image/svg"
                />
              </div>

              <div className="warpbtn-popup">
                <Button
                  type={"btn-popupcancel"}
                  onClick={() => handleCancel("add")}
                />
                <Button type={"btn-popupsave"} />
              </div>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    );
  } else if (modalType === "editTool") {
    return (
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Body className="px-4">
            <div className="heading_5 mb-3">
              <AiOutlineArrowLeft
                className="icon-title"
                onClick={handleClose}
              />
              Edit Tool
            </div>
            <form onSubmit={handleSubmit}>
              <Form.Label className="title-form-category">
                Input Tool Name
              </Form.Label>
              <div className="mb-3 text-start">
                <input
                  type="text"
                  placeholder="Enter tool"
                  className="form-control mr-3 mb-4 radiusborder"
                  onChange={(e) => setTool(e.target.value)}
                  value={tool === "" && name !== "" ? setTool(name) : tool}
                  name="tool"
                  required
                ></input>
              </div>
              <Form.Label className="title-form-category">
                Input Link Download
              </Form.Label>
              <div className="mb-3 text-start">
                <input
                  type="link"
                  placeholder="Enter link tool"
                  className="form-control mr-3 mb-4 radiusborder"
                  onChange={(e) => setLinkDownload(e.target.value)}
                  value={
                    linkDownload === "" && link !== ""
                      ? setLinkDownload(link)
                      : linkDownload
                  }
                  name="link"
                  required
                ></input>
              </div>

              <div className="d-flex flex-column gap-2 mb-5">
                <div className="image-edit">
                  <img
                    src={file ? URL.createObjectURL(file) : img}
                    alt=""
                    className="image-before"
                  />

                  <input
                    name="image"
                    type="file"
                    className="input-edit-image-course"
                    onChange={handleFileUpload}
                    title="Upload Image"
                    accept="image/x-png,image/gif,image/jpeg, image/jpg, image/svg"
                  />
                </div>
                {file ? (
                  <div className="name-file">
                    <div className="d-flex gap-2 align-items-center fst-italic">
                      <BsFileEarmarkImage />
                      {file ? file.name : ""}
                    </div>
                    <div className="d-flex gap-2 align-items-center me-3">
                      <div className="added">
                        <BsCheck />
                        added
                      </div>
                      <AiOutlineClose onClick={() => setFile(0)} />
                    </div>
                  </div>
                ) : (
                  " "
                )}
              </div>

              <div className="warpbtn-popup mt-4">
                <Button
                  type={"btn-popupcancel"}
                  onClick={() => handleCancel("edit")}
                />
                <Button type={"btn-popupsave"} />
              </div>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    );
  } else {
    return "";
  }
};

export default Index;
