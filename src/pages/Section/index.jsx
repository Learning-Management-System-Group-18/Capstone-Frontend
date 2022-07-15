import React, { useEffect, useState } from "react";
import "./style.css";
import {
  Button,
  NavbarAdmin,
  Notification,
  FormSection,
  Preview,
} from "../../components";
import { Row, Col } from "react-bootstrap";
import { arrowRightIcon, slideIcon, videoIcon, quizIcon } from "../../assets";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import {
  AiFillPlayCircle,
  AiFillEdit,
  AiFillDelete,
  AiFillBook,
  AiFillCheckCircle,
  AiOutlineClose,
} from "react-icons/ai";
import { useParams, useNavigate } from "react-router-dom";
import axiosInstance from "../../networks/apis";

function Index() {
  const navigate = useNavigate();
  const { title, idSection } = useParams();
  const [video, setVideo] = useState([]);
  const [quiz, setQuiz] = useState([]);
  const [slide, setSlide] = useState([]);

  const section = [];

  const [show, setShow] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [modalType, setModalType] = useState("");
  const [edit, setEdit] = useState();
  const [idEdit, setIdEdit] = useState();
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState(section);
  const [preview, setPreview] = useState("");
  const [typePreview, setTypePreview] = useState("");

  const handlePreview = (type, data) => {
    setPreview(data[0]);
    setTypePreview(type);
    setShowPreview(true);
  };

  const handleClose = () => {
    setShow(false);
    setEdit("");
    setPreview("");
    setTypePreview("");
    setShowPreview(false);
  };

  const handleShow = (type) => {
    setShow(true);
    setModalType(type);
  };

  const handleEdit = (type, data, id) => {
    setEdit(data[0]);
    setIdEdit(id);
    console.log("data", edit);
    setShow(true);
    setModalType(type);
  };

  const buttonBack = () => {
    navigate(-1);
  };

  const tambah = (newData) => {
    setData(data.concat(newData));
  };

  // API HANDLE

  const getAllContentById = async () => {
    await axiosInstance
      .get(`/api/content?sectionId=${idSection}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response.data.data);
        let res = response.data.data;
        setVideo(res.video);
        setQuiz(res.quiz);
        setSlide(res.slide);
      })
      .catch((error) => console.log(error));
  };

  const create = async (type, newData) => {
    const types = type.toLowerCase();
    await axiosInstance
      .post(`/api/admin/${types}?sectionId=${idSection}`, newData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response);
        setSuccess(!success);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = async (type, id) => {
    console.log(id);
    const types = type.toLowerCase();
    console.log(types);
    await axiosInstance
      .delete(`/api/admin/${types}?id=${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response);
        setSuccess(!success);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const update = async (type, newData, id) => {
    const types = type.toLowerCase();
    await axiosInstance
      .put(`/api/admin/${types}?id=${id}`, newData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response);
        setSuccess(!success);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllContentById();
  }, [idSection, success]);

  const bg = {
    height: video.length == 0 ? "100vh" : "100%",
    backgroundColor: "#F5F8FB",
  };

  return (
    <div style={bg}>
      <NavbarAdmin />
      <div className="nav-info">
        <div className="container d-flex justify-content-between pt-3">
          <span className="align-middle caption_2">
            Dashboard <img src={arrowRightIcon} alt="arrow-right" /> Create
            Course <img src={arrowRightIcon} alt="arrow-right" /> Create Section
          </span>
          <Notification />
        </div>
      </div>
      <div className="container">
        <div className=" d-flex justify-content-between mt-4 mb-5">
          <div className="margin-content">
            <p
              style={{ fontSize: "20px", textTransform: "capitalize" }}
              className="heading_1 secondary_2"
            >
              {title.replaceAll("-", " ")}
            </p>
          </div>
          <div className=" notif-box d-flex justify-content-around invisible">
            <AiFillCheckCircle className="mt-3 me-5" />
            <div className="mx-5">
              <p>File Successfully Added</p>
              <p>The video successfully added</p>
            </div>
            <div className="ms-5">
              <button>
                <AiOutlineClose />
              </button>
            </div>
          </div>
          <div className="text-center margin-content">
            <DropdownButton
              id="dropdown-item-button"
              title="+ ADD"
              bsPrefix=" dropdown-toggle-1"
            >
              <Dropdown.Item
                as="button"
                className="create-button"
                onClick={() => handleShow("Video")}
              >
                <span>
                  <AiFillPlayCircle /> Upload Video
                </span>
              </Dropdown.Item>
              <Dropdown.Item
                as="button"
                className="create-button"
                onClick={() => handleShow("Slide")}
              >
                <span>
                  <AiFillBook /> Upload Materi
                </span>
              </Dropdown.Item>
              <Dropdown.Item
                as="button"
                className="create-button"
                onClick={() => handleShow("Quiz")}
              >
                <span>
                  <AiFillCheckCircle /> Upload Quiz
                </span>
              </Dropdown.Item>
            </DropdownButton>
          </div>
        </div>

        {/* {data?.map((data, i) => (
          <Row key={i}>
            <Col xs={2} className="me-4 mb-5">
              <div
                className="thumbnail"
                style={
                  data[i]?.video !== null
                    ? {
                        backgroundColor: `black`,
                      }
                    : data[i]?.slide !== null
                    ? {
                        backgroundColor: `blue`,
                      }
                    : {
                        backgroundColor: `red`,
                      }
                }
              >
                <button
                  className="button-preview  ps-4"
                  onClick={() => handlePreview()}
                >
                  <AiFillPlayCircle /> Preview
                </button>
              </div>
            </Col>
            <Col xs={9}>
              <h5>Title </h5>
              <p> {data.title}</p>
              <h5>Description</h5>

              <p className="pb-2">{data.description}</p>
              <span className={data.jenis}>{data.jenis}</span>
            </Col>
            <Col xs={0} className="mt-5  ">
              <button
                className="function-button mt-2"
                onClick={() => handleEdit(data)}
              >
                <AiFillEdit />
              </button>
              <br />
              <button
                className="function-button mt-5"
                onClick={() => handleDelete(data.id, data.jenis)}
              >
                <AiFillDelete />
              </button>
            </Col>
          </Row>
        ))} */}
        <Preview
          handleClose={handleClose}
          showPreview={showPreview}
          handlePreview={handlePreview}
          show={show}
          data={preview}
          type={typePreview}
        />
        <FormSection
          show={show}
          modalType={modalType}
          handleClose={handleClose}
          handleShow={handleShow}
          edit={edit}
          tambah={tambah}
          data={data}
          create={create}
          update={update}
        />
      </div>
      <div className="container">
        <div className="row">
          {video?.map((x, i, array) => (
            <>
              <div className="col-2" key={i}>
                <div className="thumbnail">
                  <img
                    src={videoIcon}
                    alt="icon"
                    onClick={() => handlePreview("video", array)}
                  />
                </div>
              </div>
              <div className="col-8">
                <div className="body_2 secondary_2">Title </div>
                <div className="caption_1 neutral_3"> {x.title}</div>
                <div className="body_2 secondary_2">Description</div>

                <div className="caption_1 neutral_3">{x.description}</div>
                <div className="Video mt-2">Video</div>
              </div>
              <div className="col-2">
                <div className="ms-5 mt-2">
                  <button
                    className="function-button"
                    onClick={() => handleEdit("video", array, x.id)}
                  >
                    <AiFillEdit />
                  </button>
                  <br />
                  <button
                    className="function-button"
                    onClick={() => handleDelete("video", x.id)}
                  >
                    <AiFillDelete />
                  </button>
                </div>
              </div>
            </>
          ))}
          {slide?.map((x, i, array) => (
            <>
              <div className="col-2 my-5" key={i}>
                <div className="thumbnail">
                  <img
                    src={slideIcon}
                    alt="icon"
                    onClick={() => handlePreview("slide", array)}
                  />
                </div>
              </div>
              <div className="col-8 my-5">
                <div className="body_2 secondary_2">Title </div>
                <div className="caption_1 neutral_3"> {x.title}</div>
                <div className="body_2 secondary_2">Description</div>

                <div className="caption_1 neutral_3">{x.description}</div>
                <div className="Slide mt-2">Slide</div>
              </div>
              <div className="col-2 my-5">
                <div className="ms-5 mt-2">
                  <button
                    className="function-button"
                    onClick={() => handleEdit("slide", array, x.id)}
                  >
                    <AiFillEdit />
                  </button>
                  <br />
                  <button
                    className="function-button"
                    onClick={() => handleDelete("slide", x.id)}
                  >
                    <AiFillDelete />
                  </button>
                </div>
              </div>
            </>
          ))}
          {quiz?.map((x, i, array) => (
            <>
              <div className="col-2" key={i}>
                <div className="thumbnail">
                  <img
                    src={quizIcon}
                    alt="icon"
                    onClick={() => handlePreview("quiz", array)}
                  />
                </div>
              </div>
              <div className="col-8">
                <div className="body_2 secondary_2">Title </div>
                <div className="caption_1 neutral_3"> {x.title}</div>
                <div className="body_2 secondary_2">Description</div>

                <div className="caption_1 neutral_3">{x.description}</div>
                <div className="Quiz mt-2">Quiz</div>
              </div>
              <div className="col-2">
                <div className="ms-5 mt-2">
                  <button
                    className="function-button"
                    onClick={() => handleEdit("quiz", array, x.id)}
                  >
                    <AiFillEdit />
                  </button>
                  <br />
                  <button
                    className="function-button"
                    onClick={() => handleDelete("quiz", x.id)}
                  >
                    <AiFillDelete />
                  </button>
                </div>
              </div>
            </>
          ))}
        </div>
        <div className="py-5 d-flex justify-content-end">
          <Button type={"btn-back"} onClick={buttonBack} />
          <Button type={"btn-save"} onClick={buttonBack} />
        </div>
      </div>
    </div>
  );
}

export default Index;
