import { React, useState } from "react";
import "./style.css";
import { NavDropdown, Nav } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { navUserIcon, profileUserIcon } from "../../assets";
import { useEffect } from "react";
import axiosInstance from "../../networks/apis";

const Index = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const locationLink = location.pathname;
  const link = locationLink.split("/");

  const [categories, setCategories] = useState([]);

  useEffect(async () => {
    await axiosInstance
      .get("api/categories")
      .then((response) => {
        // console.log(response.data.data);
        setCategories(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleCategoryClass = (id, name) => {
    let titleSlug = name
      .replace(/[`~!@#$%^&*()_\-+=\[\]{};:'"\\|\/,.<>?\s]/g, " ")
      .toLowerCase();
    titleSlug = titleSlug.replace(/^\s+|\s+$/gm, "");
    titleSlug = titleSlug.replace(/\s+/g, "-");

    console.log(titleSlug);
    navigate(`/class-category/${titleSlug}/${id}`);
  };

  console.log(categories);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" id="nav-user">
      <div className="container ms-4">
        <Link to="/">
          <img src={navUserIcon} alt="navUserIcon" className="icon-navuser" />
        </Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <Nav className="mx-auto">
            <Nav>
              <Link
                to="/home"
                className={`${
                  link[1] == "home"
                    ? `item-nav-user decoration-Navuser `
                    : `item-nav-user`
                }`}
              >
                Home
              </Link>
            </Nav>
            <Nav>
              <Link
                to="/my-class"
                className={`${
                  link[1] == "my-class"
                    ? `item-nav-user decoration-Navuser `
                    : `item-nav-user`
                }`}
              >
                My Course
              </Link>
            </Nav>
            <Nav>
              <NavDropdown
                title="Category"
                id="basic-nav-dropdown"
                className={`${
                  link[1] == "profile"
                    ? `drop-nav-user decoration-Navuser`
                    : `drop-nav-user`
                }`}
                style={{ color: "black" }}
              >
                {categories?.map((category, i) => (
                  <NavDropdown.Item
                    className="drop-item-nav-user"
                    key={i}
                    onClick={() =>
                      handleCategoryClass(category.id, category.title)
                    }
                  >
                    {category.title}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            </Nav>
          </Nav>
        </div>
      </div>
      <div className="navuser-Search">
        <FiSearch className="navuser-SearchIcon" />
        <input
          type="text"
          placeholder="Social media specialist"
          className="navuser-SearchInput"
        ></input>
      </div>
      <div className="iconProfileUser">
        <Link to="/user-profile">
          <img src={profileUserIcon} className="img-usernav" alt="icon" />
        </Link>
      </div>
    </nav>
  );
};

export default Index;
