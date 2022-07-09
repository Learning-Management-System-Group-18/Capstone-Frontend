import React, { useContext } from "react";
import "./style.css";
import { Outlet, Link } from "react-router-dom";
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
function CourseSideBar() {
  return (
    <div>
      <Navbar key={false} bg="light" expand={false} className="mb-3">
        <Container fluid>
          <Navbar.Toggle
            aria-controls={`offcanvasNavbar-expand-${false}`}
            style={{ border: "none", marginLeft: "48px" }}
          />
          <h1 style={{ paddingRight: "500px" }}>Social Media Marketing</h1>

          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${false}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
                <span>Course Section</span> <br />
                <span>20 lesson</span>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Accordion defaultActiveKey="0">
                <Card className="card-faq">
                  {/* FAQ */}
                  <CustomToggle
                    eventKey="0"
                    section={"Section 1 - "}
                    tittleSection={"Intorduction"}
                  />

                  <Accordion.Collapse eventKey="0">
                    <Card.Body className="body-section">
                      <div className="the-section">
                        <div className="d-flex gap-3  align-items-center">
                          <img src={VideoCourse} alt="" />
                          <div className="body_1_user">
                            Video - Advertising in facebook and instagram
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                  {/* FAQ */}
                  <CustomToggle
                    eventKey="1"
                    section={"Section 1 - "}
                    tittleSection={"Intorduction"}
                  />

                  <Accordion.Collapse eventKey="1">
                    <Card.Body className="body-section">
                      <div className="the-section">
                        <div className="d-flex gap-3  align-items-center">
                          <img src={VideoCourse} alt="" />
                          <div className="body_1_user">
                            Video - Advertising in facebook and instagram
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                  {/* FAQ */}
                  <CustomToggle
                    eventKey="2"
                    section={"Section 2 - "}
                    tittleSection={"Intorduction"}
                  />

                  <Accordion.Collapse eventKey="2">
                    <Card.Body className="body-section">
                      <div className="the-section">
                        <div className="d-flex gap-3  align-items-center">
                          <img src={VideoCourse} alt="" />
                          <div className="body_1_user">
                            Video - Advertising in facebook and instagram
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
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
