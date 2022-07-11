import React from "react";
import "./style.css";
import { Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { navUserIcon } from "../../assets";

const NavBarLandingPage = () => {
  const location = useLocation();
  const locationLink = location.pathname;
  const link = locationLink.split("/");

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" id="nav-user">
      <div className="container ms-4">
        <Link to="/home">
          <img src={navUserIcon} alt="navUserIcon" className="icon-navuser" />
        </Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <Nav className="mx-auto">
            <Nav>
              <Link
                to="/"
                className={`${
                  link[1] == "home"
                    ? `item-nav-user decorationuser`
                    : `item-nav-user`
                }`}
              >
                Home
              </Link>
            </Nav>
            <Nav>
              <Link
                to="/FAQ"
                className={`${
                  link[1] == "myclass"
                    ? `item-nav-user decorationuser`
                    : `item-nav-user`
                }`}
              >
                FAQ
              </Link>
            </Nav>
            <Nav>
              <Link
                to="/ContactUs"
                className={`${
                  link[1] == "myclass"
                    ? `item-nav-user decorationuser`
                    : `item-nav-user`
                }`}
              >
                ContactUs
              </Link>
            </Nav>
          </Nav>
        </div>
      </div>

      <Link to="/register" className="item-nav-user me-5">
        SignUp
      </Link>
      <Link to="/login" className="item-nav-user decorationuser me-5">
        Login
      </Link>
    </nav>
  );
};

export default NavBarLandingPage;
