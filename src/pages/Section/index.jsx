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
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import {
  AiFillPlayCircle,
  AiFillEdit,
  AiFillDelete,
  AiFillBook,
  AiFillCheckCircle,
} from "react-icons/ai";
import { useParams } from "react-router-dom";
import axiosInstance from "../../networks/apis";

function Index() {
  const section = [];

  const [show, setShow] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [modalType, setModalType] = useState("");
  const [edit, setEdit] = useState();
  const { categoryName } = useParams();
  const handleClose = () => {
    setShow(false);
    setEdit();
    setShowPreview(false);
  };
  const [data, setData] = useState(section);
  const handleShow = (type) => {
    setShow(true);
    setModalType(type);
    console.log(type);
  };

  const handleEdit = (data) => {
    setEdit(data);
    setShow(true);
    setModalType(data.jenis);
  };

  const handlePreview = (data) => {
    setShowPreview(true);
    console.log("Halo");
  };

  const tambah = (newData) => {
    console.log(newData);
    setData(data.concat(newData));
  };

  useEffect(() => {
    const fetchData = async () => {
      const allContent = await axiosInstance.get("api/content", {
        params: { sectionId: 1, page: 1, size: 7 },
      });
      console.log(allContent);
      const video = allContent.data.data.video;
      const quiz = allContent.data.data.quiz;
      const slide = allContent.data.data.slide;
      const videos = {
        jenis: "Video",
      };
      const slides = {
        jenis: "Slide",
      };
      const tasks = {
        jenis: "Task",
      };
      const mapVideo = video.map((data) => ({ ...data, ...videos }));
      const mapQuiz = quiz.map((data) => ({ ...data, ...slides }));
      const mapSlide = slide.map((data) => ({ ...data, ...tasks }));

      setData(data.concat(mapVideo, mapQuiz, mapSlide));
    };
    fetchData();
  }, []);

  const create = async (type, newData) => {
    const types = type.toLowerCase();
    await axiosInstance
      .post(
        `api/admin/${types}`,
        newData,

        {
          params: { sectionId: 1 },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <NavbarAdmin />
      <div className="nav-info">
        <div className="container d-flex justify-content-between py-3">
          <span className="align-middle caption_2">
            Dashboard {categoryName}
          </span>
          <Notification />
        </div>
      </div>
      <div className="container mb-3 ">
        <Row className=" my-5">
          <Col xs={11}>
            <p style={{ fontSize: "20px" }}> Introduction Class</p>
          </Col>
          <Col xs={1} className="text-center">
            <DropdownButton
              id="dropdown-item-button"
              title="ADD"
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
          </Col>
        </Row>
        {data.map((data, i) => (
          <Row key={data.id}>
            <Col xs={2} className="me-4 mb-5">
              <div
                className="thumbnail"
                style={
                  data.jenis === "Video"
                    ? {
                        backgroundImage: `url(${`https://i.ytimg.com/vi/${data.link.substring(
                          17
                        )}/hq720.jpg`})`,
                      }
                    : data.jenis === "Reading"
                    ? {
                        backgroundImage: `url(${`https://lh3.google.com/u/0/d/${data.link.substring(
                          39,
                          83
                        )}=w208-h117`})`,
                      }
                    : {
                        backgroundImage: `url(${`https://lh3.google.com/u/0/d/${data.link.substring(
                          34,
                          90
                        )}=w208-h117`})`,
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
              {console.log(data.jenis)}
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
              <button className="function-button mt-5">
                <AiFillDelete />
              </button>
            </Col>
          </Row>
        ))}
      </div>
      <div className="my-5 d-flex justify-content-end me-5">
        <Button type={"btn-back"} />
        <Button type={"btn-save"} />
      </div>

      <Preview
        handleClose={handleClose}
        showPreview={showPreview}
        handlePreview={handlePreview}
        show={show}
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
      />
    </div>
  );
}

export default Index;
