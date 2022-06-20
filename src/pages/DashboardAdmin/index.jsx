import React from "react";
import { Card, Button, Table, NavbarAdmin } from "../../components";
import { userIcon } from "../../assets";

const index = () => {
  const tHead = [
    "Category Name",
    "Description",
    "Course",
    "Employee",
    "Action",
  ];
  const data = [
    "Android Developer",
    "Android developer adalah course yang mempelajari cara mengembangkan aplikasi mobile dengan bahasa Dar...",
    "12 Course",
    "121 Employee",
    "Edit",
  ];

  return (
    <>
      <NavbarAdmin />
      <div className="container d-flex justify-content-between p-3">
        <div className="">
          <span>Welcome Back</span>
          <h5>Latifa Salsabila</h5>
        </div>

        <div className="d-flex gap-3">
          <div className="search">Search</div>
          <div className="notification">Notif</div>
        </div>
      </div>

      <div className="container d-flex gap-4 mt-4">
        <Card icon={userIcon} total={7} desc={"Total of Employess"} />
        <Card icon={userIcon} total={7} desc={"Total of Employess"} />
        <Card icon={userIcon} total={7} desc={"Total of Employess"} />
      </div>

      <div className="container d-flex justify-content-between mt-5">
        <div className="">Category</div>
        <Button type={"btn-add"} />
      </div>

      <div className="container mt-4">
        <Table tHead={tHead} data={data} />
      </div>
    </>
  );
};

export default index;
