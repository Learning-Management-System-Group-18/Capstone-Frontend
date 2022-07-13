import React from "react";
import "./style.css";
import { NavbarUser, FooterUser } from "../../components";
import { GoPrimitiveDot } from "react-icons/go";
import { AiFillStar, AiFillHeart } from "react-icons/ai";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import {
  Accordion,
  Card,
  useAccordionButton,
  AccordionContext,
} from "react-bootstrap";
import {
  sertifikat,
  user,
  jadwal,
  level,
  ProfileImg,
  tool,
  lockKey,
} from "../../assets";
import { useState, useContext } from "react";
import ReactPlayer from "react-player";
import { useEffect } from "react";
import axiosInstance from "../../networks/apis";
import Category from "./Category";
import About from "./About";
import Lesson from "./Lesson";
import Review from "./Review";

const Index = () => {
  const [tabs, setTabs] = useState("about");

  const [data, setData] = useState([]);
  const [mentor, setMentor] = useState([]);
  const [tool, setTool] = useState([]);
  const [section, setSection] = useState([]);
  const [video, setVideo] = useState([]);
  const [slide, setSlide] = useState([]);
  const [quiz, setQuiz] = useState([]);
  const [review, setReview] = useState([]);

  const getDetailCourse = async (idCourse) => {
    await axiosInstance
      .get("api/course", {
        params: {
          id: idCourse,
        },
      })
      .then((response) => {
        // console.log("from API", response.data.data);
        setData(response.data.data);
      })
      .catch((error) => console.log(error));
  };

  const getAllMentorByCourseId = async (idCourse) => {
    await axiosInstance
      .get(`api/mentors?courseId=${idCourse}`)
      .then((response) => {
        // console.log("from API", response.data.data);
        setMentor(response.data.data);
      })
      .catch((error) => console.log(error));
  };

  const getAllToolByCourseId = async (idCourse) => {
    await axiosInstance
      .get(`api/tools?courseId=${idCourse}`)
      .then((response) => {
        // console.log("from API", response.data.data);
        setTool(response.data.data);
      })
      .catch((error) => console.log(error));
  };

  const getAllSectionByCourseId = async (idCourse) => {
    await axiosInstance
      .get(`api/sections?courseId=${idCourse}`)
      .then((response) => {
        // console.log("from API", response.data.data);
        setSection(response.data.data);
      })
      .catch((error) => console.log(error));
  };

  const getAllReviewByCourseId = async (idCourse) => {
    await axiosInstance
      .get(`api/review?courseId=${idCourse}&page=${0}&size=${1}`)
      .then((response) => {
        // console.log("from API", response.data.data);
        setReview(response.data.data);
      })
      .catch((error) => console.log(error));
  };

  const getAllContentByIdTitle = async (idSection) => {
    await axiosInstance
      .get(`api/content?sectionId=${idSection}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        // console.log(response.data.data);
        let res = response.data.data;
        setVideo(res.video);
        setQuiz(res.quiz);
        setSlide(res.slide);
      })
      .catch((error) => console.log(error));
  };

  const createOrder = async () => {};

  useEffect(() => {
    getDetailCourse(12);
    getAllMentorByCourseId(12);
    getAllToolByCourseId(12);
    getAllSectionByCourseId(22);
    getAllReviewByCourseId(12);
  }, []);

  // console.log("data ", data);
  // console.log("mentor ", mentor);
  // console.log("tool ", tool);
  // console.log("section ", section);
  // console.log("review ", review);

  return (
    <>
      <NavbarUser />

      <div className="container-fluid px-5">
        <div className="row">
          <div className="col-md-8">
            {/* Category */}

            <div className="my-5">
              <Category data={data} />
            </div>

            {/* /Category */}

            {/* Tabs */}

            <div className="row mt-5">
              <div className="col-4">
                <div
                  className="heading_5"
                  onClick={() => setTabs("about")}
                  style={{ cursor: "pointer" }}
                >
                  About
                </div>
              </div>
              <div className="col-4 ps-4">
                <div
                  className="heading_5 ps-5"
                  onClick={() => setTabs("lesson")}
                  style={{ cursor: "pointer" }}
                >
                  Lesson
                </div>
              </div>
              <div className="col-4 ps-5">
                <div
                  className="heading_5 text-center"
                  onClick={() => setTabs("review")}
                  style={{ cursor: "pointer" }}
                >
                  Review
                </div>
              </div>

              <div className="col-12 mt-2">
                <div className="bottom-brdr d-flex justify-content-between">
                  <div
                    className={`${tabs === "about" ? `active-tabs` : ` `}`}
                  ></div>
                  <div
                    className={`${tabs === "lesson" ? `active-tabs` : ` `}`}
                  ></div>
                  <div
                    className={`${tabs === "review" ? `active-tabs` : ` `}`}
                  ></div>
                </div>
              </div>
            </div>

            {/* /Tabs */}

            {/* ROW Content */}

            <div className="row">
              {/* TAB About */}
              <div className={`${tabs === "about" ? `col-12` : `d-none`}`}>
                <About mentors={mentor} tools={tool} data={data} />
              </div>
              {/* TAB About */}

              {/* TAB Lesson */}

              <div
                className={`${tabs === "lesson" ? `col-12 my-5` : `d-none`}`}
              >
                <div className="heading_5_user mb-3">Course Section</div>
                <Lesson sections={section} />
              </div>

              {/* TAB Lesson */}

              {/* TAB REVIEW */}
              <div className={`${tabs === "review" ? `col-12` : `d-none`}`}>
                <Review />
                {/* <div className="text-center neutral_3 body_2_user">
                  See More
                  <IoIosArrowDown className="ms-2 isection" />
                </div> */}
              </div>
              {/* TAB REVIEW */}
            </div>
            {/* ROW Content */}
          </div>

          {/* right */}
          <div className="col-md-4">
            <div className="mt-5">
              <div className="text-center px-1">
                <ReactPlayer
                  url={" "}
                  width={"100%"}
                  height={"250px"}
                  className="video"
                  config={{
                    youtube: {
                      playerVars: {
                        disablekb: 1,
                        modestbranding: 1,
                        controls: 0,
                        showinfo: 0,
                      },
                    },
                  }}
                />
              </div>
              <div className="list-detail-course mb-5">
                <div className="heading_4_user my-2">Free Course</div>
                <button className="subtitle_2_user btn-enrol col-12">
                  Enrol Course
                </button>

                <div className="mt-3">
                  <div className="d-flex gap-3">
                    <img src={sertifikat} alt="sertifikat" className="boxImg" />
                    <div className="d-flex flex-column">
                      <div className="subtitle_3_user black">Certification</div>
                      <div className="caption_1_user">
                        Mendapatkan sertifikat selesai menyelesaikan video dan
                        task dalm course yang kamu pilih
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="d-flex gap-3">
                    <img src={jadwal} alt="sertifikat" className="boxImg" />
                    <div className="d-flex flex-column">
                      <div className="subtitle_3_user black">
                        Jadwal Fleksibel
                      </div>
                      <div className="caption_1_user">
                        Mendapatkan sertifikat selesai menyelesaikan video dan
                        task dalm course yang kamu pilih
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="d-flex align-items-center gap-3">
                    <img src={user} alt="sertifikat" className="boxImg" />
                    <div className="subtitle_3_user black">58 Employee</div>
                  </div>
                </div>
                <div className="mt-3 mb-3">
                  <div className="d-flex align-items-center gap-3">
                    <img src={level} alt="sertifikat" className="boxImg" />
                    <div className="subtitle_3_user black">Beginner</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterUser />
    </>
  );
};

export default Index;
