import React from "react";
import {
  Card,
  Button,
  Table,
  NavbarAdmin,
  SearchBar,
  Notification,
  FormCategory,
} from "../../components";
import {
  employIcon,
  categoriesIcon,
  courseIcon,
  arrowRightIcon,
  totalMentorIcon,
} from "../../assets";
import "./style.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axiosInstance from "./../../networks/apis";

const Index = () => {
  const { categoryName, idCategory } = useParams();
  const nameCategory = categoryName.replaceAll("-", " ");
  const tableTitle = ["Course"];
  const tHead = ["Course Title", "Description", "Level", "Rating", ""];

  const [success, setSuccess] = useState(false);
  const [dataCourse, setDataCourse] = useState([]);

  console.log(nameCategory, idCategory);
  console.log("dataCourse", dataCourse);

  // API HANDLE

  const getDataCourseById = async (id) => {
    await axiosInstance
      .get(`/api/courses?categoryId=${id}`)
      .then((response) => {
        setDataCourse(response.data.data);
        // console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const insertDataCourse = async (data) => {
    await axiosInstance
      .post(`/api/admin/course?categoryId=${idCategory}`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setSuccess(!success);
      })
      .catch((error) => console.log(error));
  };

  const editDataCourse = async (data, id) => {
    await axiosInstance
      .put(`/api/admin/course?id=${id}`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setSuccess(!success);
      })
      .catch((error) => console.log(error));
  };

  const deleteDataCourse = async (idDelete) => {
    await axiosInstance
      .delete("/api/admin/course", {
        params: { id: idDelete },
      })
      .then((x) => {
        setSuccess(!success);
      })
      .catch((r) => {
        console.log(r);
      });
  };

  useEffect(() => {
    if (idCategory !== null) {
      getDataCourseById(idCategory);
    }
  }, []);

  useEffect(() => {
    getDataCourseById(idCategory);
  }, [idCategory]);

  useEffect(() => {
    getDataCourseById(idCategory);
  }, [success]);

  return (
    <>
      <NavbarAdmin />
      <div className="background">
        <div className="nav-info">
          <div className="container d-flex justify-content-between py-4">
            <div className="nav-name">
              <span className="align-middle caption_2">
                Dashboard <img src={arrowRightIcon} alt="arrow-right" />{" "}
                <span style={{ textTransform: "capitalize" }}>
                  {nameCategory}
                </span>
              </span>
            </div>

            <div className="d-flex align-items-center gap-3">
              <SearchBar />
              <Notification />
            </div>
          </div>
        </div>
        <div className="container mt-4">
          <div className="d-flex mb-1">
            <h1
              className="me-3 heading_4 secondary_2"
              style={{ textTransform: "capitalize" }}
            >
              {nameCategory}
            </h1>
            <Button type={"btn-edit"} />
          </div>
          <p className="caption_1 neutral_3">
            {dataCourse[0]?.category.description}
          </p>
        </div>

        <div className="container d-flex gap-4 mt-4">
          <Card icon={courseIcon} total={14} desc={"Total of Course"} />
          <Card icon={totalMentorIcon} total={5} desc={"Total of Mentor"} />
          <Card icon={employIcon} total={121} desc={"Total of Employees"} />
        </div>

        <div className="container background-table px-5 pb-5 mt-4">
          <Table
            tHead={tHead}
            data={dataCourse || []}
            deleteDataCourse={deleteDataCourse}
            editDataCourse={editDataCourse}
            insertDataCourse={insertDataCourse}
            tableTitle={tableTitle}
          />
        </div>
      </div>
    </>
  );
};

export default Index;
