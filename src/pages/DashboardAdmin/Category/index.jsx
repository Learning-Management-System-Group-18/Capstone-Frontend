import React from "react";
import {
  Card,
  Button,
  Table,
  NavbarAdmin,
  SearchBar,
  Notification,
} from "../../../components";
import { employIcon, categoriesIcon, courseIcon } from "../../../assets";
import "./style.css";

const index = () => {
  const tableTitle = ["Category"];
  const tHead = [
    "Category Name",
    "Description",
    "Course",
    "Employee",
    "Action",
  ];
  const data = [
    {
      title: "Android Developer",
      desc: "Android developer adalah course yang mempelajari cara mengembangkan aplikasi mobile dengan bahasa Dar...",
      course: "12 Course",
      employee: "Coba",
      icon: "https://img.icons8.com/ultraviolet/344/play-button-circled.png",
    },
    {
      title: "HTML",
      desc: "Android developer adalah course yang mempelajari cara mengembangkan aplikasi mobile dengan bahasa Dar...",
      course: "12 Course",
      employee: "Coba",
      icon: "https://img.icons8.com/color/344/apple-app-store--v1.png",
    },
  ];

  return (
    <>
      <NavbarAdmin />
      <div className="background">
        <div className="nav-info">
          <div className="container d-flex justify-content-between py-3">
            <div className="nav-name">
              <span className="title-nav">Welcome back</span>
              <h5>Latifa Salsabila 👋</h5>
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
          <Table tHead={tHead} data={data} tableTitle={tableTitle} />
        </div>
      </div>
    </>
  );
};

export default index;
