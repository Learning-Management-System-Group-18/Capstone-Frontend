import React from "react";
import { NavbarUser, FooterUser, PopularClassCard } from "../../components";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useEffect, useState } from "react";
import axiosInstance from "../../networks/apis";
import { noData } from "../../assets";
import "./style.css";
import { useParams } from "react-router-dom";
const Index = () => {
  const { categoryName, idCategory } = useParams();

  console.log(typeof idCategory);

  const [popularCourse, setPopularCourse] = useState([]);
  useEffect(async () => {
    await axiosInstance
      .get("/api/course/popular")
      .then((response) => {
        // console.log(response.data.data);
        setPopularCourse(response.data.data);
        // console.log(popularCourse);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const newData = popularCourse.filter((x) => {
    if (x.category.id === Number(idCategory)) {
      return x;
      console.log("first");
    } else {
      // return x;
      console.log(x.category.id);
    }
  });

  console.log("dataFilter ", newData);

  // console.log(popularCourse);

  return (
    <>
      <NavbarUser />

      <div className="container d-flex justify-content-between py-5 px-4">
        <div
          className="titleClassCategory"
          style={{ textTransform: "capitalize" }}
        >
          {categoryName.replaceAll("-", " ")}
        </div>
        <DropdownButton
          id="dropdown-basic-button"
          title="Filter by level"
          className="filterClassCategory"
        >
          <Dropdown.Item className="dropitem-ClassCategory">
            Beginner
          </Dropdown.Item>
          <Dropdown.Item className="dropitem-ClassCategory">
            Intermediate
          </Dropdown.Item>
          <Dropdown.Item className="dropitem-ClassCategory">
            Advaced
          </Dropdown.Item>
        </DropdownButton>
      </div>

      {newData?.length > 0 ? (
        <PopularClassCard data={newData || []} />
      ) : (
        <div className="container text-center my-5 ">
          <img src={noData} alt="no-data" />
          <div className="body_1 mt-3">
            Data Kategori {categoryName.replaceAll("-", " ")} Masih Belum
            Tersedia{" "}
          </div>
        </div>
      )}

      <footer>
        <FooterUser />
      </footer>
    </>
  );
};

export default Index;
