import React, { useEffect, useState } from "react";
import Ellipse from "../../assets/img/Ellipse 19.png";
import Ellipse2 from "../../assets/img/Ellipse 20.png";
import Banner from "../../assets/img/rafiki.png";
import { Row, Col, Form } from "react-bootstrap";
import "./style.css";
import { axiosInstance } from "../../networks/apis";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

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
      // console.log("HEREEE");
      alert(`login Pendaftar Tidak Sesuai`);
    } else {
      // console.log("HEREE1");

      const newUser = {
        email: login.email,
        password: login.password,
      };

      setUser(user.concat(newUser));
      // console.log(axiosInstance);
      resetForm();
    }
    e.preventDefault();
  };

  const resetForm = () => {
    // console.log(resetForm);
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
      <div className="container-fluid">
        <img className="ellipse" src={Ellipse} alt="" />
        <img className="ellipse2" src={Ellipse2} alt="" />
        <Row>
          <Col className="bg_banner">
            <div className="left-content">
              <div className="banner">
                <img className="img-fluid" src={Banner} alt="banner" />
              </div>
              <h3 className="text-light">Welcome Back 👋</h3>
              <p className="text-light">Please Login here</p>
            </div>
          </Col>
          <Col>
            <div className="container p-container">
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
                <Form.Label className="title">Password</Form.Label>
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
                    {passwordType === "password" ? (
                      <AiOutlineEye />
                    ) : (
                      <AiOutlineEyeInvisible />
                    )}
                  </span>
                </div>
                <span className="err-Msg ">
                  <i>{errorMassage.password}</i>
                </span>

                <div className="d-flex justify-content-between mt-3 mb-5">
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

                <Col lg={12}>
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
