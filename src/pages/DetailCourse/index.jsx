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
    getAllSectionByCourseId(12);
    getAllReviewByCourseId(12);
  }, []);

  console.log("data ", data);
  console.log("mentor ", mentor);
  console.log("tool ", tool);
  console.log("section ", section);
  console.log("review ", review);

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
                {/* MENTOR */}
                <div className="mt-5">
                  <div className="heading_5_user mb-3">Mentor</div>
                  <div className="d-flex gap-3 align-items-center">
                    <img src={ProfileImg} alt="mentor" className="img-mentor" />
                    <div className="d-flex flex-column">
                      <div className="subtitle_2_user">Jonathan Williams</div>
                      <div
                        className="subtitle_2_user "
                        style={{ color: "rgba(0, 0, 0, 0.5)" }}
                      >
                        Senior UI/UX
                      </div>
                    </div>
                  </div>
                </div>
                {/* MENTOR */}

                {/* DESC */}
                <div className="mt-5">
                  <div className="heading_5_user mb-3">Deskripsi</div>
                  <div
                    className="caption_1_user"
                    style={{ color: "rgba(86, 95, 103, 1)" }}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores iste fuga earum corporis perspiciatis delectus.
                    Beatae, id dolore? Quibusdam, corporis repellendus id autem
                    consequatur, laborum cum deleniti dicta perspiciatis, totam
                    dolorum iusto amet iste officia! Sapiente dolores quos
                    nulla, in accusamus distinctio sed cumque magnam. Natus
                    animi deserunt sapiente odio.
                  </div>
                </div>

                {/* DESC */}

                {/* Tool */}
                <div className="mt-5">
                  <div className="heading_5_user mb-3">Tool</div>
                  <div className="d-flex tool gap-2 align-items-center">
                    <img src={tool} alt="" />
                    <div className="d-flex flex-column">
                      <div className="caption_1">Google Analytic</div>
                      <div className="caption_2 underline">Link Download</div>
                    </div>
                  </div>
                </div>

                {/* Tool */}
              </div>
              {/* TAB About */}

              {/* TAB Lesson */}

              <div
                className={`${tabs === "lesson" ? `col-12 my-5` : `d-none`}`}
              >
                <div className="heading_5_user mb-3">Course Section</div>

                <Accordion defaultActiveKey="0">
                  <Card className="card-section">
                    {/* Section */}
                    <CustomToggle eventKey="0" section={"Introduction React"} />

                    <Accordion.Collapse eventKey="0">
                      <Card.Body className="body-active-course">
                        <div className="the-section">
                          <div className="d-flex gap-3  align-items-center">
                            <div className="number-section body_1_user">01</div>
                            <div className="body_1_user">
                              Video - Advertising in facebook and instagram
                            </div>
                          </div>
                          <img src={lockKey} alt="lockey" />
                        </div>
                        <div className="the-section">
                          <div className="d-flex gap-3  align-items-center">
                            <div className="number-section body_1_user">02</div>
                            <div className="body_1_user">
                              Video - Advertising in facebook and instagram
                            </div>
                          </div>
                          <img src={lockKey} alt="lockey" />
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                    {/* Section */}

                    <CustomToggle
                      eventKey="1"
                      section={"Introduction React JS"}
                    />

                    <Accordion.Collapse eventKey="1">
                      <Card.Body className="body-active-course">
                        <div className="the-section">
                          <div className="d-flex gap-3  align-items-center">
                            <div className="number-section body_1_user">02</div>
                            <div className="body_1_user">
                              Video - Advertising in facebook and instagram
                            </div>
                          </div>
                          <img src={lockKey} alt="lockey" />
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>

              {/* TAB Lesson */}

              {/* TAB REVIEW */}
              <div className={`${tabs === "review" ? `col-12` : `d-none`}`}>
                {/* SINGLE RATING */}
                <div className="d-flex justify-content-between mt-4">
                  <div className="d-flex align-items-center gap-2">
                    <AiFillStar
                      className="secondary_1"
                      style={{ width: "24px", height: "24px" }}
                    />
                    <div className="heading_5_user">4.8 (230 reviews)</div>
                  </div>
                  <div className="heading_5_user">See All</div>
                </div>
                {/* SINGLE RATING */}

                {/* ALL RATING */}
                <div className="d-flex gap-5 mt-3 mb-4">
                  <div className="d-flex align-items-center gap-2 bg_primary single-rating">
                    <AiFillStar
                      style={{ width: "24px", height: "24px", color: "white" }}
                    />
                    <div className="subtitle_2_user text-white">All</div>
                  </div>
                  <div className="d-flex align-items-center gap-2 single-rating the-rating">
                    <AiFillStar
                      style={{
                        width: "24px",
                        height: "24px",
                        color: "#335EF7",
                      }}
                    />
                    <div className="subtitle_2_user text primary_1">1</div>
                  </div>
                  <div className="d-flex align-items-center gap-2 single-rating the-rating">
                    <AiFillStar
                      style={{
                        width: "24px",
                        height: "24px",
                        color: "#335EF7",
                      }}
                    />
                    <div className="subtitle_2_user text primary_1">2</div>
                  </div>
                  <div className="d-flex align-items-center gap-2 single-rating the-rating">
                    <AiFillStar
                      style={{
                        width: "24px",
                        height: "24px",
                        color: "#335EF7",
                      }}
                    />
                    <div className="subtitle_2_user text primary_1">3</div>
                  </div>
                  <div className="d-flex align-items-center gap-2 single-rating the-rating">
                    <AiFillStar
                      style={{
                        width: "24px",
                        height: "24px",
                        color: "#335EF7",
                      }}
                    />
                    <div className="subtitle_2_user text primary_1">4</div>
                  </div>
                  <div className="d-flex align-items-center gap-2 single-rating the-rating">
                    <AiFillStar
                      style={{
                        width: "24px",
                        height: "24px",
                        color: "#335EF7",
                      }}
                    />
                    <div className="subtitle_2_user text primary_1">5</div>
                  </div>
                </div>

                {/* ALL RATING */}

                {/* THE REVIEW */}

                <div className="box-review mb-4">
                  {/* person */}
                  <div className="d-flex align-items-center gap-3">
                    <img src={ProfileImg} alt="mentor" className="img-mentor" />
                    <div className="subtitle_2_user">Jonathan Williams</div>
                    <div className="d-flex align-items-center gap-2 single-rating the-rating">
                      <AiFillStar
                        style={{
                          width: "24px",
                          height: "24px",
                          color: "#335EF7",
                        }}
                      />
                      <div className="subtitle_2_user text primary_1">5</div>
                    </div>
                  </div>
                  {/* person */}

                  {/* review */}
                  <div className="caption_1_user mt-3">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Nam porro numquam quae cupiditate deleniti, ex, nulla,
                    accusantium labore pariatur recusandae ea. Hic, corrupti
                    enim! Rerum, odit mollitia, dolores nam facere perspiciatis
                    amet voluptate veniam, nesciunt hic natus nobis vitae illum
                    sequi! Doloribus quaerat sint tenetur, necessitatibus iusto
                    laudantium aliquid iste!
                  </div>
                  {/* review */}

                  {/* Like and Time */}
                  <div className="d-flex align-items-center mt-2">
                    <AiFillHeart
                      style={{ color: "red", width: "16px", height: "16px" }}
                    />
                    <span className="neutral_2 caption_1_user ms-2 me-3">
                      50
                    </span>
                    <span className="neutral_2 caption_1_user">
                      2 Weeks Ago
                    </span>
                  </div>
                  {/* Like and Time */}
                </div>
                {/* THE REVIEW */}

                <div className="text-center neutral_3 body_2_user">
                  See More
                  <IoIosArrowDown className="ms-2 isection" />
                </div>
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

function CustomToggle({ section, eventKey, callback }) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <>
      <Card.Header
        className={`${
          !isCurrentEventKey ? `bg-transparent` : `active-course-section`
        }`}
      >
        <div className="d-flex gap-3 align-items-center">
          <div
            className={`${
              !isCurrentEventKey ? `icon-circle` : `icon-circle active-section`
            }`}
            onClick={decoratedOnClick}
          >
            {!isCurrentEventKey ? (
              <IoIosArrowDown className="isection" />
            ) : (
              <IoIosArrowUp className="isection active-section" />
            )}
          </div>
          <div>
            <span className="sc"> Section {Number(eventKey) + 1} -</span>
            <span className="sc_1">{section}</span>
          </div>
        </div>
      </Card.Header>

      {/* <div
        className={`${
          !isCurrentEventKey ? `icon-circle` : `icon-circle active-section`
        }`}
        onClick={decoratedOnClick}
      >
        {!isCurrentEventKey ? (
          <IoIosArrowDown className="isection" />
        ) : (
          <IoIosArrowUp className="isection active-section" />
        )}
      </div> */}
    </>
  );
}
