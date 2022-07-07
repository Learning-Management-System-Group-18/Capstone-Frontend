import React from "react";
import { useState, useEffect } from "react";
import {
  Card,
  Table,
  NavbarAdmin,
  SearchBar,
  Notification,
} from "../../components";
import { employIcon, categoriesIcon, courseIcon } from "../../assets";
import "./style.css";
import axiosInstance from "./../../networks/apis";

const Index = () => {
  const tableTitle = ["Category"];
  const tHead = ["Category Name", "Description", "Course", "Employee", ""];
  const [dataCategory, setDataCategory] = useState([]);
  const full_name = localStorage.getItem("full_name");

  const getDataCategory = async () => {
    await axiosInstance
      .get("api/categories", {
        params: { page: 1, size: 20 },
      })
      .then((response) => {
        console.log(response.data.data);
        setDataCategory(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [success, setSuccess] = useState(false);

  const insertDataCategory = async (data) => {
    await axiosInstance
      .post("api/admin/category", data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((response) => {
        setSuccess(!success);
      })
      .catch((error) => console.log(error));
  };

  const editDataCategory = async (data, id) => {
    const params = `?id=` + id;
    await axiosInstance
      .put(`api/admin/category${params}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        setSuccess(!success);
      })
      .catch((error) => console.log(error));
  };

  const deleteDataCategory = async (idDelete) => {
    await axiosInstance
      .delete("api/admin/category", {
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
    getDataCategory();
  }, []);

  useEffect(() => {
    getDataCategory();
  }, [success]);

  // const data = [
  //   {
  //     title: "Android Developer",
  //     desc: "Android developer adalah course yang mempelajari cara mengembangkan aplikasi mobile dengan bahasa Dar...",
  //     course: "12 Course",
  //     employee: "Coba",
  //     icon: "https://img.icons8.com/ultraviolet/344/play-button-circled.png",
  //   },
  //   {
  //     title: "HTML",
  //     desc: "Android developer adalah course yang mempelajari cara mengembangkan aplikasi mobile dengan bahasa Dar...",
  //     course: "12 Course",
  //     employee: "Coba",
  //     icon: "https://img.icons8.com/color/344/apple-app-store--v1.png",
  //   },
  // ];

  return (
    <>
      <NavbarAdmin />
      <div className="background">
        <div className="nav-info">
          <div className="container d-flex justify-content-between py-3">
            <div className="nav-name">
              <span className="title-nav">Welcome back</span>
              <h5>{full_name} 👋</h5>
            </div>

            <div className="d-flex align-items-center gap-3">
              <SearchBar />
              <Notification />
            </div>
          </div>
        </div>

        <div className="container d-flex gap-4 mt-4">
          <Card icon={categoriesIcon} total={7} desc={"Total of Categories"} />
          <Card icon={courseIcon} total={7} desc={"Total of Course"} />
          <Card icon={employIcon} total={7} desc={"Total of Employess"} />
        </div>

        <div className="container background-table px-5 pt-2 pb-5 mt-5">
          <Table
            tHead={tHead}
            data={dataCategory || []}
            tableTitle={tableTitle}
            insertDataCategory={insertDataCategory}
            deleteDataCategory={deleteDataCategory}
            editDataCategory={editDataCategory}
          />
        </div>
      </div>
    </>
  );
};

export default Index;
