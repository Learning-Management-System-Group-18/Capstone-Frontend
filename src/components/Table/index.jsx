import React from "react";
import "./style.css";
import { Accordion } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, FormCategory, PopupDelete } from "../";
import { useState } from "react";

const Index = ({ tHead, data, tableTitle, insertData }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [show, setShow] = useState(false);

  const [showDelete, setShowDelete] = useState(false);

  const [modalType, setModalType] = useState("");
  const [id, setId] = useState();

  const handleClose = () => setShow(false);
  const handleShow = (type, id) => {
    setId(id);
    setShow(true);
    setModalType(type);
    console.log(type);
    console.log(id);
  };

  const handleCloseDelete = () => setShowDelete(false);
  const deleteShow = () => {
    setShowDelete(true);
  };

  const handleCategoryButton = (categoryName) => {
    navigate(`/dashboard/${categoryName}`);
  };

  return (
    <div className="rounded p-3 bg_neutral_4">
      <div className="table_header mb-3">
        <h3 className="heading_4 secondary_2">{tableTitle}</h3>
        <Button
          type={
            location.pathname === "/dashboard" ? "btn-add" : "btn-add-course"
          }
          onClick={() => handleShow("create")}
        />
      </div>
      <FormCategory
        handleShow={handleShow}
        show={show}
        modalType={modalType}
        handleClose={handleClose}
        insertData={insertData}
        idEdit={id || 0}
      />
      <div className="px-1">
        {location.pathname === "/dashboard" ? (
          <table className="table table-hover">
            <thead>
              <div className="row rounded bg_neutral_4 text-dark align-items-center p-2">
                {tHead.map((head, headIdx) => {
                  if (head === "Category Name") {
                    return (
                      <div
                        className="col-2 text-center body_2 neutral_2"
                        key={headIdx}
                      >
                        {head}
                      </div>
                    );
                  } else if (head === "Description") {
                    return (
                      <div
                        className="col-4 text-center body_2 neutral_2"
                        key={headIdx}
                      >
                        {head}
                      </div>
                    );
                  } else {
                    return (
                      <div
                        className="col ps-5 text-center body_2 neutral_2"
                        key={headIdx}
                      >
                        {head}
                      </div>
                    );
                  }
                })}
              </div>
            </thead>
            <tbody>
              {data?.map((item, itemIdx) => (
                <Accordion>
                  <div
                    className="row rounded bg-light text-dark align-items-center"
                    key={itemIdx}
                  >
                    <Accordion.Item eventKey={itemIdx}>
                      <Accordion.Header>
                        <img
                          className="icon"
                          src={item.url_image}
                          alt={item.title}
                        />
                        <div
                          onClick={() => handleCategoryButton(item.title)}
                          className="col-2 ms-5 caption_1 secondary_2"
                        >
                          {item.title}
                        </div>
                        <div className="col-4 me-2 caption_1 secondary_2">
                          {item.description.length >= 70
                            ? `${item.description.substring(0, 100)}...`
                            : item.description}
                        </div>
                        <div className="col-2 caption_1 secondary_2">
                          {item.count_course} Course
                        </div>
                        <div className="col caption_1 secondary_2">
                          {item.count_user} User
                        </div>
                        <div className="col d-flex justify-content-end mx-3">
                          <Button
                            type={"btn-edit"}
                            onClick={() => handleShow("edit", item.id)}
                          />
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="d-flex justify-content-end px-4">
                          <div className="mx-2 card_alert">
                            <span className="alert_delete caption_1 secondary_2">
                              Delete this category, will remove all the items
                              and the courses in this category
                            </span>
                          </div>
                          <Button type={"btn-delete"} onClick={deleteShow} />
                        </div>

                        <PopupDelete
                          show={showDelete}
                          handleClose={handleCloseDelete}
                        />
                      </Accordion.Body>
                    </Accordion.Item>
                  </div>
                </Accordion>
              ))}
            </tbody>
          </table>
        ) : (
          <table className="table table-hover">
            <thead>
              <div className="row rounded bg_neutral_4 text-dark align-items-center p-2">
                {tHead.map((head, headIdx) => {
                  if (head === "Course Title") {
                    return (
                      <div
                        className="col text-center body_2 neutral_2"
                        key={headIdx}
                      >
                        {head}
                      </div>
                    );
                  } else if (head === "Mentor") {
                    return (
                      <div
                        className="col-4 text-center body_2 neutral_2"
                        key={headIdx}
                      >
                        {head}
                      </div>
                    );
                  } else if (head === "Employee") {
                    return (
                      <div className="col ps-5 body_2 neutral_2" key={headIdx}>
                        {head}
                      </div>
                    );
                  } else {
                    return (
                      <div
                        className="col-2 ps-5 text-center body_2 neutral_2"
                        key={headIdx}
                      >
                        {head}
                      </div>
                    );
                  }
                })}
              </div>
            </thead>
            <tbody>
              {data.map((item, itemIdx) => (
                <Accordion>
                  <div
                    className="row rounded bg-light text-dark align-items-center"
                    key={itemIdx}
                  >
                    <Accordion.Item eventKey={itemIdx}>
                      <Accordion.Header>
                        <img
                          className="icon"
                          src={item.iconTitle}
                          alt={item.title}
                        />
                        <div className="col ms-3 text-center caption_1 secondary_2">
                          {item.title}
                        </div>
                        <div className="col-4 text-center caption_1 secondary_2">
                          <img
                            className="mentor_img_1"
                            src={item.mentorImg[0]}
                            alt={item.mentor[0]}
                          />
                          <img
                            className="mentor_img_2"
                            src={item.mentorImg[1]}
                            alt={item.mentor[1]}
                          />
                          {item.mentor[0] + " , " + item.mentor[1]}
                        </div>
                        <div className="col text-center caption_1 secondary_2">
                          {item.section}
                        </div>
                        <div className="col text-center caption_1 secondary_2">
                          {item.employee}
                        </div>
                        <div className="col d-flex justify-content-end mx-3">
                          <Button type={"btn-edit"} />
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="d-flex justify-content-end px-4">
                          <div className="mx-2 card_alert">
                            <span className="alert_delete caption_1 secondary_2">
                              Delete this category, will remove all the items
                              and the courses in this category
                            </span>
                          </div>
                          <Button type={"btn-delete"} />
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </div>
                </Accordion>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Index;
