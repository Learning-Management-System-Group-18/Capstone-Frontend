import React, { useEffect, useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function Index() {
  const baseLogin = {
    email: "",
    password: "",
  };
  const baseError = {
    email: "",
    password: "",
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
        setErrorMassage({ ...errorMassage, [name]: "Email Tidak Sesuai" });
      } else {
        setErrorMassage({ ...errorMassage, [name]: "" });
      }
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
      axios.post("http://54.227.80.34/api/login", user[0]).then(
        (response) => {
          console.log(response.data.data.role);
          if (response.data.data.role[0] === "ROLE_ADMIN") {
            console.log("Navigate to role admin");
          } else {
            console.log("Navigate to home");
          }
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }, [user]);
  return (
    <div>
      <Row className="mt-5">
        <Col className="text-center">
          <img
            className="mb-4"
            src="https://images.unsplash.com/photo-1653857329139-b233fbf7795a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
            alt=""
            style={{ width: "250px" }}
          />
          <h4>Welcome Back</h4>
          <h4>to Level Up, Please Login Here</h4>
          <p>
            Ini merupakan halaman login untuk admin Lorem ipsum dolor <br /> sit
            amet, consectetur adipiscing elit. Mattis consequat mi amet
            <br /> maecenas cursus tellus.
          </p>
        </Col>
        <Col>
          <h1 className="text-center">Login</h1>
          <div className="container">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  required
                  type="email"
                  name="email"
                  value={login.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="inputStyle text-center"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  name="password"
                  value={login.password}
                  onChange={handleChange}
                  placeholder="password"
                  className="inputStyle text-center"
                />
              </Form.Group>
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

              <div>
                {Object.keys(errorMassage).map((key) => {
                  if (errorMassage[key] !== "") {
                    return <p key={key}>{errorMassage[key]}</p>;
                  }
                  return null;
                })}
              </div>

              <div className="p-3">
                <input className="loginButton" type="submit" value="Login" />
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Index;
