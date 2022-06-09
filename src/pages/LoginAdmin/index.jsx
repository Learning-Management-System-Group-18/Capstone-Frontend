import React, { useEffect, useState } from "react";
import Ellipse from "../../assets/img/Ellipse 19.png";
import Ellipse2 from "../../assets/img/Ellipse 20.png";
import Banner from "../../assets/img/banner_login.png";
import { Row, Col, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { axiosInstance } from "../../networks/apis";

function Index() {
  const baseLogin = {
    email: "",
    password: "",
  };
  const baseError = {
    email: "",
    password: "",
    warna: "#ced4da",
  };

  const iconEye = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-eye"
      viewBox="0 0 16 16"
    >
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
    </svg>
  );

  const iconEyeSlash = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-eye-slash"
      viewBox="0 0 16 16"
    >
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
    </svg>
  );
  const userLogin = [];
  const [user, setUser] = useState(userLogin);
  const [login, setLogin] = useState(baseLogin);
  const [errorMassage, setErrorMassage] = useState(baseError);
  const regexEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const [passwordType, setPasswordType] = useState("password");
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "email") {
      if (!regexEmail.test(value)) {
        setErrorMassage({
          ...errorMassage,
          [name]: "Email Tidak Sesuai",
          warna: "red",
        });
      } else {
        setErrorMassage({ ...errorMassage, [name]: "", warna: "#ced4da" });
      }
    }
    if (name === "password") {
      setErrorMassage({ ...errorMassage, [name]: "", warna: "#ced4da" });
    }
    setLogin({ ...login, [name]: value });
  };

  const handleSubmit = (e) => {
    if (errorMassage.email !== "") {
      console.log("HEREEE");
      alert(`login Pendaftar Tidak Sesuai`);
    } else {
      console.log("HEREE1");

      const newUser = {
        email: login.email,
        password: login.password,
      };

      setUser(user.concat(newUser));
      console.log(axiosInstance);
      resetForm();
    }
    e.preventDefault();
  };

  const resetForm = () => {
    console.log(resetForm);
    setLogin(baseLogin);
    setErrorMassage(baseError);
  };

  useEffect(() => {
    if (user.length !== 0) {
      axiosInstance
        .post("/login", user[0])
        .then((response) => {
          console.log(response.data.data.role);
          if (response.data.data.role[0] === "ROLE_ADMIN") {
            console.log("Navigate to role admin");
          } else {
            console.log("Navigate to home");
          }
        })
        .catch((error) => {
          console.log(error);
          console.log("error");
          setErrorMassage({
            ...errorMassage,
            email: "Email Salah",
            password: "Password Salah",
            warna: "red",
          });
          setUser(userLogin);
        });
    }
  }, [user]);
  return (
    <>
      {console.log(process.env.REACT_APP_ENDPOINT)}
      <div className="container-fluid">
        <img className="ellipse" src={Ellipse} alt="" />
        <img className="ellipse2" src={Ellipse2} alt="" />

        <Row>
          <Col className=" bg_banner mx-auto py-4">
            <img className="img-fluid" src={Banner} alt="banner" />
            <h3 className="text-center text-light">Welcome Back 👋</h3>
            <p className="text-light text-center">Please Login here</p>
          </Col>
          <Col>
            <div className="container" style={{ padding: "54px 95px" }}>
              <h1 className="title">
                Login to <br /> Your Account
              </h1>
              <p className="text-start mt-1 mb-5">
                Don't have an account ?<a href="">Sign Up</a>
              </p>

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="title">Email</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    name="email"
                    value={login.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    style={{ border: `1px solid ${errorMassage.warna}` }}
                  />
                  <span className="err-Msg">
                    <i>{errorMassage.email}</i>
                  </span>
                </Form.Group>
                <Form.Label className="title d-block">Password</Form.Label>
                <div className="input-group">
                  <input
                    required
                    type={passwordType}
                    name="password"
                    value={login.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    className={
                      errorMassage.password
                        ? `form-control border-end-0 border border-danger`
                        : `form-control border-end-0`
                    }
                  />
                  <span
                    className={
                      errorMassage.password
                        ? `input-group-text bg-transparent border border-danger`
                        : `input-group-text bg-transparent`
                    }
                    onClick={togglePassword}
                  >
                    {passwordType === "password" ? iconEyeSlash : iconEye}
                  </span>
                </div>
                <span className="err-Msg ">
                  <i>{errorMassage.password}</i>
                </span>

                <div className="d-flex justify-content-between mt-3">
                  <div>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>
                  </div>
                  <div>
                    <a href="" className="me-auto">
                      Lupa password?
                    </a>
                  </div>
                </div>

                <Col lg={12} style={{ marginTop: "3rem" }}>
                  <button className="btn btn-primary col-lg-12">Login</button>
                </Col>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Index;
