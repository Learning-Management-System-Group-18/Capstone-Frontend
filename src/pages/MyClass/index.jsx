import { React, useState, useEffect } from "react";
import "./style.css";
import { NavbarUser, MyCourse } from "../../components";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import axiosInstance from "../../networks/apis";

const Index = () => {
  const [tabs, setTabs] = useState("ongoing");

  const [ongoingClass, setOngoingClass] = useState([]);
  const [completedClass, setCompletedClass] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/api/auth/order/ongoing", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log("ongoing ", response.data);
        setOngoingClass(...ongoingClass, response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    axiosInstance
      .get("/api/auth/order/completed", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log("completed ", response.data);
        setCompletedClass(...completedClass, response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // console.log(tabs);
  // console.log(ongoingClass);
  // console.log(completedClass);

  return (
    <div className="bg-mainMyClass">
      <NavbarUser />

      {/* Tabs */}
      <div className="row nav-userMyClass">
        <div className="col-4 d-flex gap-5 mt-4 ms-4 ">
          <div
            className={
              tabs === `ongoing`
                ? `myclass-Ongoing-btn textdecor-MyClass`
                : `myclass-Ongoing-btn`
            }
            onClick={() => setTabs("ongoing")}
            style={{ cursor: "pointer" }}
          >
            Ongoing
          </div>
          <div
            className={
              tabs === `completed`
                ? `myclass-Completed-btn textdecor-MyClass`
                : `myclass-Completed-btn`
            }
            onClick={() => setTabs("completed")}
            style={{ cursor: "pointer" }}
          >
            Completed
          </div>
        </div>
        {/* Tabs */}

        {/* Dropdown Item */}
        <div className="col-7 d-flex justify-content-end mt-3">
          <DropdownButton
            id="dropdown-basic-button"
            title="Filter by category"
            className="filterClassCategory"
          >
            <Dropdown.Item>Web & Mobile Developer</Dropdown.Item>
            <Dropdown.Item>UI/UX Designer</Dropdown.Item>
            <Dropdown.Item>Business Development</Dropdown.Item>
            <Dropdown.Item>Finance & Accounting</Dropdown.Item>
            <Dropdown.Item>Data Analyst</Dropdown.Item>
            <Dropdown.Item>Marketing</Dropdown.Item>
            <Dropdown.Item>Career Preparation</Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
      {/* Dropdown Item */}

      {/* Tabs Decoration Bottom */}
      <div className="row tabs-Myclass">
        <div className="col-6 mt-2">
          <div className="d-flex">
            <div
              className={`${
                tabs === "ongoing" ? `bottom-brdrMyClassOngoing` : ``
              }`}
            ></div>

            <div
              className={`${
                tabs === "completed" ? `bottom-brdrMyClassCompleted` : ` `
              }`}
            ></div>
          </div>
        </div>
      </div>
      {/* Tabs Decoration Bottom */}

      {/* <- Start Content Page My Class Ongoing -> */}
      <div className={`${tabs === "ongoing" ? `` : `d-none`}`}>
        <div className="heading_2_user mt-5 ms-5">Ongoing Course</div>
        <div className="body_1_user mt-1 ms-5">
          Let’s continue your enrolled course to improve your skill
        </div>
        <div className="row d-flex contentmyclass-Ongoing ">
          {ongoingClass.length > 0
            ? ongoingClass.map((item, index) => (
                <div className="col-6">
                  <MyCourse
                    key={index}
                    status={
                      item.count_all - item.count_completed === 0
                        ? "completed"
                        : "ongoing"
                    }
                    id={item.course.id}
                    titleCourse={item.course.title}
                    categoryCourse={item.course.category.title}
                    imgCourse={item.course.url_image}
                    totalSection={item.count_all}
                    isCompleted={item.count_completed}
                    level={item.level}
                  />
                </div>
              ))
            : ""}
        </div>
      </div>
      {/* <- Start Content Page My Class Ongoing -> */}

      {/* <- Start Content Page My Class Completed -> */}
      <div className={`${tabs === "completed" ? `` : `d-none`}`}>
        <div className="heading_2_user mt-5 ms-5">Completed Course</div>
        <div className="body_1_user mt-1 ms-5">
          Congratulation for finish your course, you can download your
          certificate here and don’t forget to give a reivew.
        </div>
        <div className="row d-flex contentmyclass-Completed ">
          {completedClass.length > 0
            ? completedClass.map((item, index) => (
                <div className="col-6">
                  <MyCourse
                    key={index}
                    status={
                      item.count_all - item.count_completed === 0
                        ? "completed"
                        : "ongoing"
                    }
                    id={item.course.id}
                    titleCourse={item.course.title}
                    categoryCourse={item.course.category.title}
                    imgCourse={item.course.url_image}
                    totalSection={item.count_all}
                    isCompleted={item.count_completed}
                    level={item.level}
                  />
                </div>
              ))
            : ""}
        </div>
      </div>
      {/* <- End Content Page My Class Completed  -> */}
    </div>
  );
};

export default Index;
