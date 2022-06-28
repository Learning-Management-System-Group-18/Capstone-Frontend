import React, { useState, useCallback } from "react";
import { Form, Modal } from "react-bootstrap";
import { useDropzone } from "react-dropzone";
import "./style.css";
import uploadIcon from "../../assets/img/upload-icon.svg";
import { Button } from "../";
import { AiOutlineArrowLeft } from "react-icons/ai";
import axiosInstance from "../../networks/apis";
import { useEffect } from "react";

const Index = ({
  handleClose,
  handleShow,
  show,
  setShow,
  modalType,
  insertData,
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
    console.log("data", data);
    console.log("data", newDataEdit);
  };

  const [file, setFile] = useState(null);
  const handleFileUpload = async (e) => {
    if (e.target.files[0]) setFile(e.target.files[0]);
  };

  // const insertData = (data) => {
  //   const token = localStorage.getItem("token");
  //   axiosInstance
  //     .post("api/admin/category", data, {
  //       headers: {
  //         authorization: `Bearer ${token}`,
  //         "content-type": "multipart/form-data",
  //       },
  //     })
  //     .then((response) => console.log(response))
  //     .catch((error) => console.log(error));
  // };

  const handleSubmit = async (event) => {
    // console.log(data);
    event.preventDefault();
    const newCategory = {
      title: data.title,
      description: data.description,
      // image: imageBase64,
      image: file,
    };

    await insertData(newCategory);

    console.log(newCategory);
    setCategory(category.concat(newCategory));
    setData(newData);
    handleClose();
  };

  const handleSubmitEdit = (event) => {
    // console.log(data);
    event.preventDefault();
    const newCategory = {
      title: data.title,
      description: data.description,
      image: file,
    };

    insertData(newCategory);

    console.log(newCategory);
    setCategory(category.concat(newCategory));
  };

  // for Edit Data
  const getDataId = async () => {
    await axiosInstance
      .get("api/category", {
        params: {
          id: idEdit,
        },
      })
      .then((response) => {
        console.log("from API", response.data.data);
        setNewDataEdit(response.data.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getDataId();
  }, [idEdit]);

  console.log(newDataEdit);

  // setData({
  //   title: newDataEdit.title || "",
  //   description: newDataEdit.description || "",
  //   url_image: newDataEdit.url_image || "",
  // });

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
                  // defaultValue={imageBase64}
                />
              </div>

              {/* <input
                type="file"
                name="image"
                className="mb-4"
                onChange={handleFileUpload}
              /> */}

              <div className="warpbtn-popup">
                <Button type={"btn-popupcancel"} onClick={handleClose} />
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
            <form onSubmit={handleSubmitEdit}>
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
                <img
                  src={newDataEdit.url_image}
                  alt=""
                  className="image-before"
                />

                <input
                  name="image"
                  type="file"
                  onChange={handleFileUpload}
                  title="Upload Image"
                  // id="uploadImage"
                  accept="image/x-png,image/gif,image/jpeg, image/jpg, image/svg"
                />
              </div>

              <div className="warpbtn-popup mt-4">
                <Button type={"btn-popupcancel"} onClick={handleClose} />
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
