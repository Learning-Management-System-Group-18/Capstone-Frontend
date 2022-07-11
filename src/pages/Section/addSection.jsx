import React from "react";
import { NavbarAdmin, Notification, FormImage } from "../../components";
import { arrowRightIcon, uploadIcon, noData, noSection } from "../../assets";
import { useParams, useNavigate, Link } from "react-router-dom";
import axiosInstance from "../../networks/apis";
import { useState } from "react";
import { useEffect } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";

const AddSection = () => {
  const { courseName, idCourse } = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  // for Edit Data
  const getDataIdCourse = async () => {
    await axiosInstance
      .get("api/course", {
        params: {
          id: idCourse,
        },
      })
      .then((response) => {
        console.log("from API", response.data.data);
        setData(response.data.data);
      })
      .catch((error) => console.log(error));
  };

  const handleContentButton = (title, idSection) => {
    let titleSlug = title
      .replace(/[`~!@#$%^&*()_\-+=\[\]{};:'"\\|\/,.<>?\s]/g, " ")
      .toLowerCase();
    titleSlug = titleSlug.replace(/^\s+|\s+$/gm, "");
    titleSlug = titleSlug.replace(/\s+/g, "-");

    console.log(titleSlug);

    navigate(`/dashboard/content/${titleSlug}/${idSection}`);
  };

  const [show, setShow] = useState(false);
  const [modalType, setModalType] = useState("");
  const [img, setImg] = useState(" ");
  const [id, setId] = useState(" ");
  const [name, setName] = useState(" ");
  const [link, setLink] = useState(" ");

  const handleClose = () => setShow(false);
  const handleShow = (type, img, id, name, link) => {
    if (img || id || name || link) {
      setImg(img);
      setId(id);
      setName(name);
      setLink(link);
      //   console.log("ini gambar", img);
      //   console.log("ini id", id);
      //   console.log("ini name", name);
    }

    setShow(true);
    setModalType(type);
    // console.log(type);
  };

  const addImgCourse = async (data) => {
    await axiosInstance
      .put(`api/admin/course/image?id=${idCourse}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        // console.log("from API", response.data.data);
        setData(response.data.data);
      })
      .catch((error) => console.log(error));
  };

  const [mentor, setMentor] = useState([]);

  const getAllMentorByCourseId = async () => {
    await axiosInstance
      .get(`api/mentors?courseId=${idCourse}`)
      .then((response) => {
        // console.log("from API", response.data.data);
        setMentor(response.data.data);
      })
      .catch((error) => console.log(error));
  };

  const [tool, setTool] = useState([]);

  const getAllToolByCourseId = async () => {
    await axiosInstance
      .get(`api/tools?courseId=${idCourse}`)
      .then((response) => {
        // console.log("from API", response.data.data);
        setTool(response.data.data);
      })
      .catch((error) => console.log(error));
  };

  const [section, setSection] = useState([]);

  const getAllSectionByCourseId = async () => {
    await axiosInstance
      .get(`api/sections?courseId=${idCourse}`)
      .then((response) => {
        // console.log("from API", response.data.data);
        setSection(response.data.data);
      })
      .catch((error) => console.log(error));
  };

  const [success, setSucces] = useState(false);

  const addMentor = async (data) => {
    await axiosInstance
      .post(`api/admin/mentor?courseId=${idCourse}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        // console.log("from API Mentor", response.data.data);
        setSucces(!success);
      })
      .catch((error) => console.log(error));
  };

  const addTool = async (data) => {
    await axiosInstance
      .post(`api/admin/tool?courseId=${idCourse}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        // console.log("from API Mentor", response.data.data);
        setSucces(!success);
      })
      .catch((error) => console.log(error));
  };

  const addSection = async (data) => {
    await axiosInstance
      .post(`api/admin/section?courseId=${idCourse}`, data)
      .then((response) => {
        // console.log("from API Mentor", response.data.data);
        setSucces(!success);
      })
      .catch((error) => console.log(error));
  };

  const editMentor = async (data, id) => {
    await axiosInstance
      .put(`api/admin/mentor?id=${id}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        // console.log("from API Mentor", response.data.data);
        setSucces(!success);
      })
      .catch((error) => console.log(error));
  };

  const editTool = async (data, id) => {
    await axiosInstance
      .put(`api/admin/tool?id=${id}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        // console.log("from API Mentor", response.data.data);
        setSucces(!success);
      })
      .catch((error) => console.log(error));
  };

  //   console.log("data", data);
  // console.log("tool", tool);

  const handleDownloadLink = (link) => {
    // console.log(link);
    window.location.replace(link);
  };

  useEffect(() => {
    if (idCourse !== null) {
      getDataIdCourse();
      getAllMentorByCourseId();
      getAllToolByCourseId();
      getAllSectionByCourseId();
    }
  }, [idCourse, success]);

  return (
    <>
      <NavbarAdmin />
      <div className="background">
        <div className="nav-info">
          <div className="container d-flex justify-content-between py-4">
            <div className="nav-name">
              <span className="align-middle caption_2">
                Dashboard <img src={arrowRightIcon} alt="arrow-right" />{" "}
                <span style={{ textTransform: "capitalize" }}>
                  Create New Section
                </span>
              </span>
            </div>

            <div className="d-flex align-items-center gap-3">
              <Notification />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-8">
              <div className="mt-4">
                {data.url_image === null ? (
                  <div
                    className="box-img-course"
                    onClick={() => handleShow("addImgCourse", idCourse)}
                  >
                    <div className="d-flex flex-column align-items-center">
                      <img src={uploadIcon} alt="upload-icon" />
                      <p>Drag & drop image here</p>
                    </div>
                  </div>
                ) : (
                  <img
                    src={data.url_image || " "}
                    alt={data.title || " "}
                    className="img-course-section"
                    onClick={() =>
                      handleShow("editImgCourse", data.url_image || " ")
                    }
                  />
                )}
                <div className="heading_4 secondary_2 mt-2">
                  {data.title || " "}
                </div>
                <div className="caption_1 neutral_3 mt-2">
                  {data.description}
                </div>
                <div className="mt-2 secondary_2 subtitle_2">
                  <div className="Video">{data.level || " "}</div>
                </div>
              </div>

              <div className="mentor mt-4 p-3">
                <div className="d-flex justify-content-between ">
                  <div className="secondary_2 subtitle_2">Mentor</div>
                  <button
                    className="btn bg_primary text-white"
                    onClick={() => handleShow("addMentor")}
                  >
                    + Add
                  </button>
                </div>

                <div className="d-flex gap-3">
                  {mentor?.length > 0 ? (
                    mentor.map((m, index) => (
                      <div
                        key={index}
                        className="d-flex flex-column align-items-center a-mentor"
                        onClick={() =>
                          handleShow("editMentor", m.url_image, m.id, m.name)
                        }
                      >
                        <img
                          src={m.url_image || " "}
                          alt="profile-img"
                          className="img-profile-mentor"
                        />
                        <div className="secondary_2 body_2">
                          {m.name || " "}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="noData">
                      <img src={noData} alt="empty" />
                      <div className="neutral_5 caption_2">No Mentor Here</div>
                    </div>
                  )}
                </div>
              </div>
              <div className="tools mt-4 p-3">
                <div className="d-flex justify-content-between">
                  <div className="secondary_2 subtitle_2">Tool</div>
                  <button
                    className="btn bg_primary text-white"
                    onClick={() => handleShow("addTool")}
                  >
                    + Add
                  </button>
                </div>

                <div className="d-flex gap-3">
                  {tool.length > 0 ? (
                    tool.map((t, index) => (
                      <div
                        className="d-flex tool gap-2 align-items-center"
                        key={index}
                      >
                        <img
                          src={t.url_image}
                          alt=""
                          className="tool-img"
                          onClick={() =>
                            handleShow(
                              "editTool",
                              t.url_image,
                              t.id,
                              t.name,
                              t.link
                            )
                          }
                        />
                        <div className="d-flex flex-column">
                          <div className="caption_1">{t.name}</div>
                          <div
                            className="caption_2 underline"
                            onClick={() => handleDownloadLink(t.link)}
                          >
                            Link Download
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="noData">
                      <img src={noData} alt="empty" />
                      <div className="neutral_5 caption_2">No Tool Here</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="mt-3">
                <div
                  className="bg-white"
                  style={{ borderRadius: "16px 16px 0 0" }}
                >
                  <div className="d-flex justify-content-between p-2 headSection">
                    <div>
                      <div className="heading_5 neutral_4">Content Course</div>
                      <div className="caption_2 neutral_4">
                        Create course section here
                      </div>
                    </div>

                    <button
                      className="btn bg_primary text-white caption_1"
                      onClick={() => handleShow("addSection")}
                    >
                      + create section
                    </button>
                  </div>
                </div>
                <div className="all-section px-3 py-1">
                  {section.length > 0 ? (
                    section.map((s, index) => (
                      <div
                        className="d-flex align-items-center justify-content-between my-2 the-section"
                        key={index}
                      >
                        <div className="d-flex gap-3 align-items-center">
                          <div className="number-section body_1_user">
                            {index + 1}
                          </div>
                          <div className="body_1_user">{s.title}</div>
                        </div>

                        <AiOutlineInfoCircle
                          style={{ height: "25px", width: "25px" }}
                          onClick={() => handleContentButton(s.title, s.id)}
                        />
                      </div>
                    ))
                  ) : (
                    <div className="noData">
                      <img
                        src={noSection}
                        alt="empty"
                        style={{ width: "200px", height: "200px" }}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FormImage
        handleShow={handleShow}
        show={show}
        addImgCourse={addImgCourse}
        modalType={modalType}
        handleClose={handleClose}
        img={img}
        id={id || ""}
        name={name || ""}
        link={link || ""}
        addMentor={addMentor}
        editMentor={editMentor}
        addTool={addTool}
        editTool={editTool}
        addSection={addSection}
      />
    </>
  );
};

export default AddSection;
