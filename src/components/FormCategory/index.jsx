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
  handleShow,
  show,
  setShow,
  modalType,
  insertDataCategory,
  editDataCategory,
  idEdit,
}) => {
  // const [imageBase64, setImageBase64] = useState("");

  // const onDrop = useCallback((acceptedFiles) => {
  //   getBase64(acceptedFiles[0])
  //     .then((result) => {
  //       if (result) {
  //         setImageBase64(result);
  //       } else {
  //         setImageBase64("");
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  // const { getRootProps, getInputProps } = useDropzone({ onDrop });

  // const getBase64 = (file) => {
  //   return new Promise((resolve, reject) => {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onload = () => resolve(reader.result);
  //     reader.onerror = (error) => reject(error);
  //   });
  // };

  const newData = {
    title: "",
    description: "",
    image: "",
  };

  const newCategoryData = [];
  const [category, setCategory] = useState(newCategoryData);
  const [data, setData] = useState(newData);
  const [newDataEdit, setNewDataEdit] = useState({});
  const [defaultData, setDefaultData] = useState({});

  // for Edit Data
  const getDataIdCategory = async () => {
    await axiosInstance
      .get("api/category", {
        params: {
          id: idEdit,
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

    if (modalType == "create") {
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

  const [file, setFile] = useState(null);
  const handleFileUpload = async (e) => {
    if (e.target.files[0]) setFile(e.target.files[0]);
  };

  // console.log(file);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (modalType === "create") {
      const newCategory = {
        title: data.title,
        description: data.description,
        image: file,
      };
      await insertDataCategory(newCategory);
      console.log(newCategory);
      setCategory(category.concat(newCategory));
      setData(newData);
    } else if (modalType === "edit") {
      console.log(newDataEdit);

      const id = newDataEdit.id;
      let dataUpdate = {};
      if (file === null) {
        dataUpdate = {
          title: newDataEdit.title,
          description: newDataEdit.description,
        };
        await editDataCategory(dataUpdate, id);
        console.log("without Image :", dataUpdate, file);
      } else {
        dataUpdate = {
          title: newDataEdit.title,
          description: newDataEdit.description,
          image: file,
        };
        await editDataCategory(dataUpdate, id);
        console.log("with Image", dataUpdate, file);
      }

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
    if (idEdit !== 0) {
      getDataIdCategory();
    }
  }, [idEdit]);

  if (modalType === "create") {
    return (
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Body className="px-4">
            <div className="heading_5 mb-3">
              <AiOutlineArrowLeft
                className="icon-title"
                onClick={handleClose}
              />
              Create Category
            </div>
            <form onSubmit={handleSubmit}>
              <Form.Label className="title-form-category">
                Input Title
              </Form.Label>
              <div className="mb-3 text-start">
                <input
                  type="text"
                  placeholder="Enter category title"
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
  } else {
    return (
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Body className="px-4">
            <div className="heading_5 mb-3">
              <AiOutlineArrowLeft
                className="icon-title"
                onClick={handleClose}
              />
              Edit Category
            </div>
            <form onSubmit={handleSubmit}>
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
              <Form.Label className="title-form-category">
                Upload Image
              </Form.Label>
              <div className="d-flex flex-column gap-2 mb-5">
                <div className="image-edit">
                  <img
                    src={
                      file ? URL.createObjectURL(file) : newDataEdit.url_image
                    }
                    alt=""
                    className="image-before-section"
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
  }
};

export default Index;
