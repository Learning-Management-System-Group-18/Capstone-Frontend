import React from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import {
  Accordion,
  Card,
  useAccordionButton,
  AccordionContext,
} from "react-bootstrap";
import { lockKey } from "../../assets";
import { useContext } from "react";

const Lesson = ({ sections }) => {
  console.log("section ", sections);

  return (
    <Accordion defaultActiveKey="0">
      <Card className="card-section">
        {/* Section */}

        {sections?.map((section, i) => (
          <>
            <CustomToggle
              eventKey={`${i}`}
              section={section.title || ""}
              key={i}
            />

            <Accordion.Collapse eventKey={`${i}`}>
              <Card.Body className="body-active-course">
                <div className="the-section">
                  <div className="d-flex gap-3  align-items-center">
                    <div className="number-section body_1_user">01</div>
                    <div className="body_1_user">
                      {section.content.video.map(
                        (v) => `Video - ${v.title || ""}`
                      )}
                    </div>
                  </div>
                  <img src={lockKey} alt="lockey" />
                </div>
                <div className="the-section">
                  <div className="d-flex gap-3  align-items-center">
                    <div className="number-section body_1_user">02</div>
                    <div className="body_1_user">
                      {section.content.slide.map((s) => `Slide - ${s.title}`)}
                    </div>
                  </div>
                  <img src={lockKey} alt="lockey" />
                </div>
                <div className="the-section">
                  <div className="d-flex gap-3  align-items-center">
                    <div className="number-section body_1_user">03</div>
                    <div className="body_1_user">
                      {section.content.quiz.map((q) => `Quiz - ${q.title}`)}
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
