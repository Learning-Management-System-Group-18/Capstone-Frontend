import React, { useContext } from "react";
import {
  Accordion,
  Card,
  useAccordionButton,
  AccordionContext,
} from "react-bootstrap";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

function FrequentlyAskQuestion() {
  return (
    <div style={{ backgroundColor: "#f5f8fb" }} className="text-center">
      <h1 style={{ paddingTop: "100px" }}>Frequently Ask Question</h1>
      <p style={{ paddingBottom: "56px" }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, labore?
        Quas beatae quasi,.
      </p>
      <div className="container" style={{ paddingBottom: "100px" }}>
        <Accordion defaultActiveKey="1">
          <Card className="card-faq">
            {/* FAQ */}
            <CustomToggle
              eventKey="0"
              section={"Apa saja jenis progrram online course?"}
            />

            <Accordion.Collapse eventKey="0">
              <Card.Body className="body-active-faq">
                <div className="">
                  <p></p>
                </div>
              </Card.Body>
            </Accordion.Collapse>
            {/* FAQ */}
            <CustomToggle eventKey="1" section={""} />

            <Accordion.Collapse eventKey="1">
              <Card.Body className="body-active-faq">
                <div>
                  <p className="answer">
                    Online course yang dibagi menjadi dua sesi yang dilaksanakan
                    secara bersamaan dengan adanya prodi Soshum dan Saintek.
                    Peserta calon mahasiswa dapat memilih paket yang telah
                    disediakan, seperti paket Reguler dan Intensif dan akan
                    dibimbing oleh para tutor profesional di bidangnya
                    masing-masing.
                  </p>
                </div>
              </Card.Body>
            </Accordion.Collapse>
            {/* FAQ */}
            <CustomToggle
              eventKey="2"
              section={"Apa perbedaan program tersebut?"}
            />

            <Accordion.Collapse eventKey="2">
              <Card.Body className="body-active-faq">
                <div className="">
                  <p></p>
                </div>
              </Card.Body>
            </Accordion.Collapse>
            {/* FAQ */}
            <CustomToggle
              eventKey="3"
              section={"Bagaimana teknis dari bimbel online?"}
            />

            <Accordion.Collapse eventKey="3">
              <Card.Body className="body-active-faq">
                <div className="">
                  <p></p>
                </div>
              </Card.Body>
            </Accordion.Collapse>
            {/* FAQ */}
            <CustomToggle
              eventKey="4"
              section={"Kurikulum yang akan diajarkan?"}
            />

            <Accordion.Collapse eventKey="4">
              <Card.Body className="body-active-faq">
                <div className="">
                  <p></p>
                </div>
              </Card.Body>
            </Accordion.Collapse>
            {/* FAQ */}
            <CustomToggle
              eventKey="5"
              section={"Kurikulum yang akan diajarkan?"}
            />

            <Accordion.Collapse eventKey="5">
              <Card.Body className="body-active-faq">
                <div className="">
                  <p></p>
                </div>
              </Card.Body>
            </Accordion.Collapse>
            {/* FAQ */}
            <CustomToggle
              eventKey="6"
              section={"Kurikulum yang akan diajarkan?"}
            />

            <Accordion.Collapse eventKey="6">
              <Card.Body className="body-active-faq">
                <div className="">
                  <p></p>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </div>
  );
}

export default FrequentlyAskQuestion;

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
          !isCurrentEventKey ? `bg-transparent` : ` header-active-faq`
        }`}
      >
        <div className=" gap-3 d-flex justify-content-between">
          <div>
            <span className="sc_1">{section}</span>
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
