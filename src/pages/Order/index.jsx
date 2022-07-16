import React from "react";
import {
  NavbarAdmin,
  SearchBar,
  Notification,
  PopupDetailOrder,
} from "../../components";
import { Dropdown, DropdownButton, Form } from "react-bootstrap";
import { GoDash } from "react-icons/go";
import { useState } from "react";
import "./style.css";
import axiosInstance from "../../networks/apis";
import { useEffect } from "react";

const Index = () => {
  const [showDetail, setShowDetail] = useState(false);
  const [detail, setDetail] = useState([]);
  const handleCloseDetail = () => setShowDetail(false);
  const detailShow = (data) => {
    setDetail(data);
    setShowDetail(true);
  };

  const bg = {
    height: "100vh",
    backgroundColor: "#F5F8FB",
  };

  const [orders, setOrders] = useState([]);

  const getAllOrders = async () => {
    await axiosInstance
      .get(`/api/auth/orders`)
      .then((response) => {
        console.log(response.data.data);
        setOrders(response.data.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllOrders();
  }, []);

  const getTheDate = () => {
    const months = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];

    const myDays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const date = new Date();

    const thisDay = date.getDay();
    const theDay = myDays[thisDay];

    const yy = date.getYear();

    const year = yy < 1000 ? yy + 1900 : yy;

    const month = months[date.getMonth()];
    const getDate = date.getDate();

    const thisDate = getDate + " " + month + " " + year;

    return {
      theDay,
      thisDate,
    };
  };

  return (
    <div style={bg}>
      <NavbarAdmin />
      <div className="background">
        <div className="nav-info">
          <div className="container d-flex justify-content-between py-3">
            <div className="nav-name">
              <span className="title-nav">{getTheDate().theDay}</span>
              <h5 className="date-order-page neutral_3">
                {getTheDate().thisDate}
              </h5>
            </div>

            <div className="d-flex align-items-center gap-3">
              <SearchBar />

              <DropdownButton
                id="dropdown-basic-button"
                title="Filter By Date"
                align="end"
                className="filter-date bg_primary"
              >
                <Dropdown.Header>
                  <div className="d-flex gap-5">
                    <label className="ms-2 me-5">From</label>
                    <label className="ms-4 ps-2">To</label>
                  </div>
                  <div className="d-flex align-items-center justify-content-around">
                    <input
                      type="date"
                      className="input-filter-date"
                      placeholder="Select Date"
                    />
                    <GoDash />
                    <input
                      type="date"
                      className="input-filter-date"
                      placeholder="Select Date"
                    />
                  </div>
                </Dropdown.Header>
                <Dropdown.Header className="text-center">
                  <button className="btn btn-filter body_2">Today</button>
                </Dropdown.Header>
                <Dropdown.Header className="text-center">
                  <button className="btn btn-filter-secondary body_2">
                    Yesterday
                  </button>
                </Dropdown.Header>
                <Dropdown.Header className="text-center">
                  <button className="btn btn-filter-secondary body_2">
                    This Week
                  </button>
                </Dropdown.Header>
                <Dropdown.Header className="text-center">
                  <button className="btn btn-filter-secondary body_2">
                    This Month
                  </button>
                </Dropdown.Header>
              </DropdownButton>

              <Notification />
            </div>
          </div>
        </div>

        <div className="container background-table px-5 pt-2 pb-5 mt-5">
          <table className="table table-order table-hover mt-3">
            <thead>
              <tr className="thead neutral_3">
                <th scope="col" className="pb-2">
                  Order ID
                </th>
                <th scope="col" className="pb-2">
                  Date
                </th>
                <th scope="col" className="pb-2">
                  Email
                </th>
                <th scope="col" className="pb-2">
                  Course ID
                </th>
                <th scope="col" className="pb-2 ps-1">
                  Course Name
                </th>
                <th scope="col " className="pb-2">
                  Category
                </th>
                <th scope="col" className="pb-2"></th>
              </tr>
            </thead>
            <PopupDetailOrder
              show={showDetail}
              handleClose={handleCloseDetail}
              data={detail || []}
            />
            <tbody>
              {orders?.map((order, i) => (
                <tr className="caption_1 neutral_3 data-order" key={i}>
                  <td scope="row" className="py-3 ps-3">
                    #{i + 1}
                  </td>
                  <td className="py-3">{order.order_date}</td>
                  <td className="py-3">{order.user.email}</td>
                  <td className="py-3 ps-3">{order.id}</td>
                  <td className="py-3 ps-1">{order.course.title}</td>
                  <td className="py-3">{order.course.category.title}</td>
                  <td className="py-3">
                    <button
                      className="btn detail bg_primary"
                      onClick={() => detailShow(order)}
                    >
                      See Detail
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Index;
