import React from "react";
import "./style.css";
import { Accordion } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, FormCategory, PopupDelete, FormCourse } from "../";
import { useState } from "react";
import { courseIcon } from "../../assets";

const Index = ({
  tHead,
  data,
  tableTitle,
  insertDataCategory,
  editDataCategory,
  deleteDataCategory,
  deleteDataCourse,
  insertDataCourse,
  editDataCourse,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [show, setShow] = useState(false);
  const [showCourse, setShowCourse] = useState(false);

  const [showDelete, setShowDelete] = useState(false);

  const [modalType, setModalType] = useState("");
  const [id, setId] = useState(null);
  const [idCourse, setIdCourse] = useState(null);
  const [idDelete, setIdDelete] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (type, id) => {
    setId(id);
    setShow(true);
    setModalType(type);
    console.log(type);
    console.log(id);
  };

  const handleCloseCourse = () => setShowCourse(false);
  const handleShowCourse = (type, id) => {
    setIdCourse(id);
    setShowCourse(true);
    setModalType(type);
    console.log(type);
    console.log(idCourse);
  };

  const handleCloseDelete = () => setShowDelete(false);
  const deleteShow = (type, id) => {
    setModalType(type);
    setIdDelete(id);
    console.log(id);
    setShowDelete(true);
  };

  const handleCategoryButton = (categoryName, idCategory) => {
    let categorySlug = categoryName
      .replace(/[`~!@#$%^&*()_\-+=\[\]{};:'"\\|\/,.<>?\s]/g, " ")
      .toLowerCase();
    categorySlug = categorySlug.replace(/^\s+|\s+$/gm, "");
    categorySlug = categorySlug.replace(/\s+/g, "-");

    console.log(categorySlug);

    navigate(`/dashboard/${categorySlug}/${idCategory}`);
  };

  const handleCourseButton = (courseName, idCourse) => {
    let courseSlug = courseName
      .replace(/[`~!@#$%^&*()_\-+=\[\]{};:'"\\|\/,.<>?\s]/g, " ")
      .toLowerCase();
    courseSlug = courseSlug.replace(/^\s+|\s+$/gm, "");
    courseSlug = courseSlug.replace(/\s+/g, "-");

    console.log(courseSlug);

    navigate(`/dashboard/course/${courseSlug}/${idCourse}`);
  };

  return (
    <div className="rounded p-3 bg_neutral_4">
      <div className="table_header mb-3">
        <h3 className="heading_4 secondary_2">{tableTitle}</h3>

        {location.pathname === "/dashboard" ? (
          <Button type="btn-add" onClick={() => handleShow("create")} />
        ) : (
          <Button
            type="btn-add-course"
            onClick={() => handleShowCourse("createCourse")}
          />
        )}
      </div>

      <FormCourse
        handleShow={handleShowCourse}
        show={showCourse}
        modalType={modalType}
        handleClose={handleCloseCourse}
        insertDataCourse={insertDataCourse}
        editDataCourse={editDataCourse}
        idEditCourse={idCourse || 0}
      />

      <FormCategory
        handleShow={handleShow}
        show={show}
        modalType={modalType}
        handleClose={handleClose}
        insertDataCategory={insertDataCategory}
        editDataCategory={editDataCategory}
        idEdit={id || 0}
      />

      <PopupDelete
        show={showDelete}
        handleClose={handleCloseDelete}
        idDelete={idDelete || ""}
        deleteData={
          modalType === "deleteCategory" ? deleteDataCategory : deleteDataCourse
        }
        // deleteDataCourse=
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
                          onClick={() =>
                            handleCategoryButton(item.title, item.id)
                          }
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
                          <Button
                            type={"btn-delete"}
                            onClick={() =>
                              deleteShow("deleteCategory", item.id)
                            }
                          />
                        </div>
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
                  } else if (head === "Description") {
                    return (
                      <div
                        className="col-4 text-center body_2 neutral_2"
                        key={headIdx}
                      >
                        {head}
                      </div>
                    );
                  } else if (head === "Level") {
                    return (
                      <div
                        className="col text-center body_2 neutral_2"
                        key={headIdx}
                      >
                        {head}
                      </div>
                    );
                  } else {
                    return (
                      <div
                        className="col text-center body_2 neutral_2"
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
                          src={
                            item.url_image !== null
                              ? item.url_image
                              : courseIcon
                          }
                          alt={item.title}
                        />
                        <div
                          className="col ms-4 me-3 caption_1 secondary_2"
                          onClick={() =>
                            handleCourseButton(item.title, item.id)
                          }
                        >
                          {item.title}
                        </div>
                        <div
                          className="col-4 caption_1 secondary_2"
                          style={{ textAlign: "justify" }}
                        >
                          {item.description?.length >= 70
                            ? `${item.description.substring(0, 150)}...`
                            : item.description}
                        </div>
                        <div className="col px-3 text-center caption_1 secondary_2">
                          {item.level}
                        </div>
                        <div className="col  text-center caption_1 secondary_2">
                          {item.rating}
                        </div>
                        <div className="col d-flex justify-content-end mx-3">
                          <Button
                            type={"btn-edit"}
                            onClick={() =>
                              handleShowCourse("editCourse", item.id)
                            }
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
                          <Button
                            type={"btn-delete"}
                            onClick={() => deleteShow("deletCourse", item.id)}
                          />
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
