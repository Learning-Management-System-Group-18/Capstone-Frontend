import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { FooterUser } from "../../components";
import NavBarLandingPage from "./NavBarLandingPage";
import SearchLading from "./searchLading";
import "./style.css";
import { LandingPagePhoto } from "../../assets";

function Index() {
  const navigate = useNavigate();
  return (
    <div style={{ background: "#F5F8FB" }}>
      <NavBarLandingPage />

      <div className="container">
        <Row>
          <Col style={{ marginTop: "14rem" }}>
            <h1>Improve Yourself for Better Future</h1>
            <span>
              Finding your passion, grow up your skill in your own space to get
              a better life
            </span>
            <SearchLading />
          </Col>
          <Col>
            <img src={LandingPagePhoto} alt="" />
          </Col>
        </Row>
      </div>
      <FooterUser />
    </div>
  );
}

export default Index;
