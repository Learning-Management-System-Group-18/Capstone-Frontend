import React, { useEffect, useState } from "react";
import Ellipse from "../../assets/img/Ellipse 19.png";
import Ellipse2 from "../../assets/img/Ellipse 20.png";
import Banner from "../../assets/img/Group 108.png";
import { Row, Col, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

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
      axios
        .post("http://54.227.80.34/api/login", user[0])
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
    <div className="container-fluid">
      <img className="ellipse" src={Ellipse} alt="" />
      <img className="ellipse2" src={Ellipse2} alt="" />
      {console.log(errorMassage)}
      <Row>
        <Col className=" bg_banner mx-auto py-4">
          <img className="mb-4 img-fluid" src={Banner} alt="banner" />
          <h5 className="position_text_title text-center">Welcome Back</h5>

          <p className="position_text">Please login here to check your work</p>
        </Col>
        <Col>
          <div className="mt-5 ps-5 mb-5">
            <h3 className=" title">Login to</h3>
            <h3 className=" title">Your Account</h3>
          </div>

          <div className="container">
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
                  className="inputStyle "
                  style={{ border: `1px solid ${errorMassage.warna}` }}
                />
              </Form.Group>
              <p className="err-Msg">{errorMassage.email}</p>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="title">Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  name="password"
                  value={login.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="inputStyle "
                  style={{ border: `1px solid ${errorMassage.warna}` }}
                />
                <button>halo</button>
              </Form.Group>
              <p className="err-Msg">{errorMassage.password}</p>
              <Row>
                <Col xs={9}>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me" />
                  </Form.Group>
                </Col>
                <Col xs={3}>
                  <Form.Text className="text-decoration-underline">
                    Lupa password?
                  </Form.Text>
                </Col>
              </Row>
              <div className="p-3">
                <input className="button btn" type="submit" value="Login" />
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Index;
