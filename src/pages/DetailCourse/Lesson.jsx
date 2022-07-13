import React from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import {
  Accordion,
  Card,
  useAccordionButton,
  AccordionContext,
} from "react-bootstrap";
import { lockKey } from "../../assets";
import { useContext, useState } from "react";
import axiosInstance from "../../networks/apis";
import { useEffect } from "react";

const Lesson = ({ sections }) => {
  const [video, setVideo] = useState([]);
  const [slide, setSlide] = useState([]);
  const [quiz, setQuiz] = useState([]);

  let y = [];
  const [kj, setkj] = useState([]);
  const simpan = (...d) => {
    y.push(...d);

    console.log("y", y);
    // setkj(y);
  };

  // console.log("kj", kj);

  useEffect(() => {
    const getAllContentByIdTitle = async (idSection, tls) => {
      await axiosInstance
        .get(`api/content?sectionId=${idSection}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          // console.log(response.data.data);
          let res = response.data.data;
          console.log("res", res);
          simpan({
            video: res.video,
            quiz: res.quiz,
            slide: res.slide,
            idx: idSection,
            tls: tls,
          });
        })
        .catch((error) => console.log(error));
    };

    // allIdSection.map((idSection) => {
    //   getAllContentByIdTitle(idSection);
    //   console.log("idx", idSection);
    // });

    // getAllContentByIdTitle(12, "Java");
    // getAllContentByIdTitle(10, "Go");

    sections.forEach((element) => {
      getAllContentByIdTitle(element.id, element.title);
      console.log(element.id);
    });
  }, []);

  return (
    <Accordion defaultActiveKey="0">
      <Card className="card-section">
        {/* Section */}

        {kj?.map((section, i) => (
          <>
            <CustomToggle eventKey={`${i}`} section={section.tls} key={i} />

            <Accordion.Collapse eventKey={`${i}`}>
              <Card.Body className="body-active-course">
                <div className="the-section">
                  <div className="d-flex gap-3  align-items-center">
                    <div className="number-section body_1_user">01</div>
                    <div className="body_1_user">
                      {section.video.map((v) => `Video - ${v.title}`)}
                    </div>
                  </div>
                  <img src={lockKey} alt="lockey" />
                </div>
                <div className="the-section">
                  <div className="d-flex gap-3  align-items-center">
                    <div className="number-section body_1_user">02</div>
                    <div className="body_1_user">
                      {section.map((s) => `Slide - ${s.title}`)}
                    </div>
                  </div>
                  <img src={lockKey} alt="lockey" />
                </div>
                <div className="the-section">
                  <div className="d-flex gap-3  align-items-center">
                    <div className="number-section body_1_user">03</div>
                    <div className="body_1_user">
                      {section.quiz.map((q) => `Slide - ${q.title}`)}
                    </div>
                  </div>
                  <img src={lockKey} alt="lockey" />
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </>
        ))}

        {/* Section */}

        {/* <CustomToggle eventKey="1" section={"Introduction React JS"} />

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
        </Accordion.Collapse> */}
      </Card>
    </Accordion>
  );
};

export default Lesson;

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
    </>
  );
}
