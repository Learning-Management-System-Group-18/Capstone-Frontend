
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { FooterUser } from "../../components";
import NavBarLandingPage from "./NavBarLandingPage";
import SearchLanding from "./searchLanding";
import FAQ from "./FrequentlyAskQuestion";
import "./style.css";
import { LandingPagePhoto } from "../../assets";


function Index() {
  const navigate = useNavigate();
  return (

    <div>
      <NavBarLandingPage />
      <div className="container">
        <Row>
          <Col style={{ marginTop: "14rem" }} xs={6}>
            <span className="tittle"> Improve Yourself for Better Future</span>
            <br />
            <span className="subtittle">
              Finding your passion, grow up your skill in your own space to get
              a better life
            </span>
            <SearchLanding />
          </Col>
          <Col xs={6}>
            <img
              src={LandingPagePhoto}
              alt=""
              style={{ width: "500px" }}
              className="mt-5 ms-5"
            />
          </Col>
        </Row>
      </div>
      <FAQ />
      <div className="started">
        <div style={{ padding: "58px 87.5px 58px 87.5px" }} className="d-flex ">
          <div>
            <span className="tittle-started">
              Are you ready to start your course now!
            </span>
            <br />
            <span className="sub-tittle-started">
              If you have any question feel free to contact us anytime, we will
              get back to you as soon as we can
            </span>
          </div>
          <div className="ms-5">
            <button
              className="get-started-button"
              onClick={() => {
                navigate("/register");
              }}
            >
              GetStarted
            </button>
          </div>
          <div>
            <button className="contact-us-button">ContactUs</button>
          </div>
        </div>
      </div>
      <FooterUser />

    </div>
  );
}

export default Index;
