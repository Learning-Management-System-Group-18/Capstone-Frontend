import React from "react";
import { Modal } from "react-bootstrap";
import "./style.css";
import { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useEffect } from "react";

const Index = ({ handleClose, show, data }) => {
  // console.log("detail : ", data);
  useEffect(() => {}, [data]);
  return (
    <div>
      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Body className="px-4">
          <div>
            <div className="heading_5 titleDetail">
              <AiOutlineArrowLeft
                className="icon-titleDetail"
                onClick={handleClose}
              />
              Detail Order Information
            </div>
            <form>
              <div>
                <label className="labelTitleDetail1">Order ID :</label>
                <input
                  type="text"
                  name="date_order"
                  className="inputDetailID"
                  value="#1"
                />
              </div>
              <div>
                <label className="labelDetail">Date Order</label>
                <input
                  type="text"
                  name="date_order"
                  className="inputDetailDate"
                  value={data?.order_date}
                />
              </div>
              <div>
                <label className="labelDetail">Nama </label>
                <input
                  type="text"
                  name="nama"
                  className="inputDetailNama"
                  value={data?.user?.full_name || " "}
                />
              </div>
              <div>
                <label className="labelDetail">Email </label>
                <input
                  type="text"
                  name="email"
                  className="inputDetailEmail"
                  value={data?.user?.email}
                />
              </div>
              <div>
                <label className="labelTitleDetail2">Detail Course </label>
              </div>
              <div>
                <label className="labelDetail">Course ID </label>
                <input
                  type="text"
                  name="course_id"
                  className="inputDetailCourseId"
                  value={`#${data?.id}`}
                />
              </div>
              <div>
                <label className="labelDetail">Course Name </label>
                <input
                  type="text"
                  name="course_name"
                  className="inputDetailCourseName"
                  value={data?.course?.title}
                />
              </div>
              <div>
                <label className="labelDetail"> Category</label>
                <input
                  type="text"
                  name="category"
                  className="inputDetailCategory"
                  value={data?.course?.category?.title}
                />
              </div>
              <div>
                <label className="labelDetail">Level </label>
                <input
                  type="text"
                  name="Level"
                  className="inputDetailLevel"
                  value={data?.course?.level}
                />
              </div>
            </form>
          </div>
          <button className="btn btn-Detail" onClick={handleClose}>
            Oke
          </button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Index;
