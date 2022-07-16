import React, { useState, useCallback } from "react";
import { Form, Modal } from "react-bootstrap";
import "./style.css";
import uploadIcon from "../../assets/img/upload-icon.svg";
import { Button } from "../";
import { AiOutlineArrowLeft } from "react-icons/ai";
import axiosInstance from "../../networks/apis";
import { useEffect } from "react";
import { BsFileEarmarkImage, BsCheck } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

const Index = ({
  handleClose,
  show,
  modalType,
  insertDataCourse,
  editDataCourse,
  idEditCourse,
}) => {
  const newData = {
    title: "",
    description: "",
    level: "",
  };

  // const [course, setCourse] = useState([]);
  const [data, setData] = useState(newData);
  const [newDataEdit, setNewDataEdit] = useState({});
  const [defaultData, setDefaultData] = useState({});

  // for Edit Data
  const getDataIdCourse = async () => {
    await axiosInstance
      .get("/api/course", {
        params: {
          id: idEditCourse,
        },
      })
      .then((response) => {
        console.log("from API", response.data.data);
        setNewDataEdit(response.data.data);
        setDefaultData(response.data.data);
      })
      .catch((error) => console.log(error));
  };

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (modalType == "createCourse") {
      setData({
        ...data,
        [name]: value,
      });
    } else {
      setNewDataEdit({
        ...newDataEdit,
        [name]: value,
      });
    }
    // console.log("data", data);
    // console.log("data", newDataEdit);
  };

  console.log("data", newDataEdit);

  const [file, setFile] = useState(null);
  const handleFileUpload = async (e) => {
    if (e.target.files[0]) setFile(e.target.files[0]);
  };

  // console.log(file);

  const handleSubmitCourse = async (event) => {
    event.preventDefault();
    if (modalType === "createCourse") {
      const newCourse = await {
        title: data.title,
        description: data.description,
        level: data.level.toUpperCase(),
        // rating: data.rating,
        // image: file,
      };
      await insertDataCourse(newCourse);
      console.log(newCourse);
      setData(newData);
    } else if (modalType === "editCourse") {
      console.log("data edit course", newDataEdit);

      const id = newDataEdit.id;

      const dataUpdate = await {
        title: newDataEdit.title,
        description: newDataEdit.description,
        level: newDataEdit.level.toUpperCase(),
      };

      await editDataCourse(dataUpdate, id);

      console.log(id, dataUpdate);
    }

    setFile(null);
    handleClose();
  };

  const handleCancel = (type) => {
    type === "add" ? setData(newData) : setNewDataEdit(defaultData);
    setFile(null);
    handleClose();
  };

  useEffect(() => {
    if (idEditCourse !== 0) {
      getDataIdCourse();
    }
  }, [idEditCourse]);

  if (modalType === "createCourse") {
    return (
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Body className="px-4">
            <div className="heading_5 mb-3">
              <AiOutlineArrowLeft
                className="icon-title"
                onClick={handleClose}
              />
              Create Course
            </div>
            <form onSubmit={handleSubmitCourse}>
              <Form.Label className="title-form-category">
                Input Title
              </Form.Label>
              <div className="mb-3 text-start">
                <input
                  type="text"
                  placeholder="Enter course title"
                  className="form-control mr-3 mb-4 radiusborder"
                  onChange={handleInput}
                  value={data.title}
                  name="title"
                  required
                ></input>
              </div>
              <Form.Label className="title-form-category">
                Input Description
              </Form.Label>
              <div className="mb-3 text-start ">
                <textarea
                  type="text"
                  placeholder="Type something here"
                  className="form-control mr-3 mb-3 radiusborder"
                  onChange={handleInput}
                  value={data.description}
                  name="description"
                  rows={5}
                  required
                ></textarea>
              </div>
              {/* <Form.Label className="title-form-category">
                Input Rating
              </Form.Label>
              <div className="mb-3 text-start">
                <input
                  type="number"
                  placeholder="max 5"
                  className="form-control mr-3 mb-4 radiusborder"
                  onChange={handleInput}
                  value={data.rating >= 5 ? 5 : data.rating}
                  name="rating"
                  max="5"
                  required
                ></input>
              </div> */}
              <Form.Label className="title-form-category">
                Input Level
              </Form.Label>
              <div className="mb-3 text-start">
                <input
                  type="text"
                  placeholder="BEGINNER / INTERMEDIATE / ADVANCED"
                  className="form-control mr-3 mb-4 radiusborder"
                  style={{ textTransform: "uppercase" }}
                  onChange={handleInput}
                  value={data.level}
                  name="level"
                  required
                ></input>
              </div>
              {/* <Form.Label className="title-form-category">
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
              </div> */}

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
  } else if (modalType === "editCourse") {
    return (
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Body className="px-4">
            <div className="heading_5 mb-3">
              <AiOutlineArrowLeft
                className="icon-title"
                onClick={handleClose}
              />
              Edit Course
            </div>
            <form onSubmit={handleSubmitCourse}>
              <Form.Label className="title-form-category">
                Input Title
              </Form.Label>
              <div className="mb-3 text-start">
                <input
                  type="text"
                  placeholder="Enter category title"
                  className="form-control mr-3 mb-4 radiusborder"
                  onChange={handleInput}
                  value={newDataEdit.title}
                  name="title"
                  required
                ></input>
              </div>
              <Form.Label className="title-form-category">
                Input Description
              </Form.Label>
              <div className="mb-3 text-start ">
                <textarea
                  type="text"
                  placeholder="Type something here"
                  className="form-control mr-3 mb-3 radiusborder"
                  onChange={handleInput}
                  value={newDataEdit.description}
                  name="description"
                  rows={5}
                  required
                ></textarea>
              </div>
              {/* <Form.Label className="title-form-category">
                Input Rating
              </Form.Label>
              <div className="mb-3 text-start">
                <input
                  type="number"
                  placeholder="max 5"
                  className="form-control mr-3 mb-4 radiusborder"
                  onChange={handleInput}
                  value={newDataEdit.rating >= 5 ? 5 : newDataEdit.rating}
                  name="rating"
                  max="5"
                  required
                ></input>
              </div> */}
              <Form.Label className="title-form-category">
                Input Level
              </Form.Label>
              <div className="mb-3 text-start">
                <input
                  type="text"
                  placeholder="BEGINNER / INTERMEDIATE / ADVANCED"
                  className="form-control mr-3 mb-4 radiusborder"
                  style={{ textTransform: "uppercase" }}
                  onChange={handleInput}
                  value={newDataEdit.level}
                  name="level"
                  required
                ></input>
              </div>
              {/* <Form.Label className="title-form-category">
                Upload Image
              </Form.Label>
              <div className="d-flex flex-column gap-2 mb-5">
                <div className="image-edit">
                  <img
                    src={
                      file ? URL.createObjectURL(file) : newDataEdit.url_image
                    }
                    alt=""
                    className="image-before"
                  />

                  <input
                    name="image"
                    type="file"
                    className="input-edit-image"
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
                  ""
                )}
              </div> */}

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
    return " ";
  }
};

export default Index;
