import React, { useContext, useState, useEffect } from "react";
import "./style.css";
import {
  Navbar,
  Container,
  Offcanvas,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Accordion,
  Card,
  useAccordionButton,
  AccordionContext,
} from "react-bootstrap";
import { VideoCourse, SlideCourse, QuizCourse } from "../../assets";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import axiosInstance from "../../networks/apis";

function CourseSideBar({ title, section, watchContent }) {
  const [contentList, setContentList] = useState([]);
  const [content, setContent] = useState([]);

  const contentAdd = () => {
    setContentList(contentList.concat(content));
  };
  const getAllContentById = async (id, title) => {
    await axiosInstance
      .get(`/api/content?sectionId=${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        let res = response.data.data;
        setContent(
          content.concat({
            id: id,
            title: title,
            video: res.video,
            slide: res.slide,
            quiz: res.quiz,
          })
        );
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    section.map((item, itemIdx) => getAllContentById(item.id, item.title));
  }, [section]);

  useEffect(() => {
    contentAdd();
  }, [content]);
  return (
    <div>
      <Navbar key={false} bg="light" expand={false} className="mb-3">
        <Container fluid>
          <Navbar.Toggle
            aria-controls={`offcanvasNavbar-expand-${false}`}
            style={{ border: "none", marginLeft: "48px" }}
          />
          <div className="heading_4" style={{ paddingRight: "40%" }}>
            {title}
          </div>

          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${false}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
                <span>Course Section</span> <br />
                <span>{contentList.length} lesson</span>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Accordion defaultActiveKey="0">
                <Card className="card-faq">
                  {/* FAQ */}
                  {contentList.map((item, itemIdx) => (
                    <div key={itemIdx}>
                      <CustomToggle
                        eventKey={itemIdx}
                        section={`Section - ${itemIdx + 1}`}
                        tittleSection={item.title}
                      />
                      <Accordion.Collapse eventKey={itemIdx}>
                        <Card.Body className="body-section">
                          {item.video.map((item, itemIdx) => (
                            <button
                              className="the-section"
                              key={itemIdx}
                              onClick={() => {
                                watchContent(item, "Video");
                              }}
                            >
                              <div className="d-flex gap-3  align-items-center">
                                <img src={VideoCourse} alt="" />
                                <div className="body_1_user">{item.title}</div>
                              </div>
                            </button>
                          ))}
                          {item.slide.map((item, itemIdx) => (
                            <button
                              className="the-section"
                              key={itemIdx}
                              onClick={() => {
                                watchContent(item, "Slide");
                              }}
                            >
                              <div className="d-flex gap-3  align-items-center">
                                <img src={SlideCourse} alt="" />
                                <div className="body_1_user">{item.title}</div>
                              </div>
                            </button>
                          ))}
                          {item.quiz.map((item, itemIdx) => (
                            <button
                              className="the-section"
                              key={itemIdx}
                              onClick={() => {
                                watchContent(item, "Quiz");
                              }}
                            >
                              <div className="d-flex gap-3  align-items-center">
                                <img src={QuizCourse} alt="" />
                                <div className="body_1_user">{item.title}</div>
                              </div>
                            </button>
                          ))}
                        </Card.Body>
                      </Accordion.Collapse>
                    </div>
                  ))}
                </Card>
              </Accordion>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}

export default CourseSideBar;

function CustomToggle({ section, eventKey, callback, tittleSection }) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <>
      <Card.Header className="header-section">
        <div className=" gap-3 d-flex justify-content-between">
          <div>
            <span>{section}</span>
            <span className="sc_1"> {tittleSection}</span>
          </div>

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
        </div>
      </Card.Header>
    </>
  );
}
