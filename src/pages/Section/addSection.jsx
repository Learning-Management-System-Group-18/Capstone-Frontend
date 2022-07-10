import React from "react";
import { NavbarAdmin, Notification, FormImage } from "../../components";
import { ProfileImg, arrowRightIcon, tool, uploadIcon } from "../../assets";
import { useParams, useNavigate } from "react-router-dom";
import axiosInstance from "../../networks/apis";
import { useState } from "react";
import { useEffect } from "react";

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

  const handleSectionButton = (courseName, idCourse) => {
    let courseSlug = courseName
      .replace(/[`~!@#$%^&*()_\-+=\[\]{};:'"\\|\/,.<>?\s]/g, " ")
      .toLowerCase();
    courseSlug = courseSlug.replace(/^\s+|\s+$/gm, "");
    courseSlug = courseSlug.replace(/\s+/g, "-");

    console.log(courseSlug);

    navigate(`/dashboard/section/${courseSlug}/${idCourse}`);
  };

  useEffect(() => {
    if (idCourse !== null) {
      getDataIdCourse();
    }
  }, [idCourse]);

  const [show, setShow] = useState(false);
  const [modalType, setModalType] = useState("");
  const [img, setImg] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (type, img) => {
    setImg(img);
    setShow(true);
    setModalType(type);
    console.log(type);
    console.log(img);
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

  console.log("data", data);

  return (
    <>
      <NavbarAdmin />
      <FormImage
        handleShow={handleShow}
        show={show}
        addImgCourse={addImgCourse}
        modalType={modalType}
        handleClose={handleClose}
        img={img || 0}
      />
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
                    className="img-course"
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
                  Level :{" "}
                  <div className="mt-1 neutral_3">{data.level || " "}</div>
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
                  <div className="d-flex flex-column align-items-center a-mentor">
                    <img
                      src={ProfileImg}
                      alt="profile-img"
                      className="img-profile-mentor"
                    />
                    <div className="secondary_2 body_2">Sandy Anugrah</div>
                  </div>
                  <div className="d-flex flex-column align-items-center a-mentor">
                    <img
                      src={ProfileImg}
                      alt="profile-img"
                      className="img-profile-mentor"
                    />
                    <div className="secondary_2 body_2">Sandy Anugrah</div>
                  </div>
                </div>
              </div>
              <div className="tools mt-4 p-3">
                <div className="d-flex justify-content-between">
                  <div className="secondary_2 subtitle_2">Tool</div>
                  <button className="btn bg_primary text-white">+ Add</button>
                </div>

                <div className="d-flex tool gap-2 align-items-center">
                  <img src={tool} alt="" />
                  <div className="d-flex flex-column">
                    <div className="caption_1">Google Analytic</div>
                    <div className="caption_2 underline">Link Download</div>
                  </div>
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
                      onClick={() => handleSectionButton(courseName, idCourse)}
                    >
                      + create section
                    </button>
                  </div>
                </div>
                <div className="all-section px-3 py-1">
                  <div className="abc">adnsaj</div>
                  <div className="abc">adnsaj</div>
                  <div className="abc">adnsaj</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddSection;
