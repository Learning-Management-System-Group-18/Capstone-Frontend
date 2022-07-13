import React, { useState, useEffect } from "react";
import "./style.css";
import { Rafiki, Ellipse, Ellipse2 } from "../../assets";
import axiosInstance from "../../networks/apis";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Index = () => {
  const newData = {
    nama: "",
    email: "",
    password: "",
  };
  const userRegister = [];
  const [user, setUser] = useState(userRegister);
  const [data, setData] = useState(newData);
  const namaRegex = /^[A-Za-z ]*$/;
  const emailRegex = /\S+@\S+\.\S+/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  const navigate = useNavigate();
  const [errMsg, SetErrMsg] = useState({
    nama: "",
    email: "",
    password: "",
  });
  const [passwordType, setPasswordType] = useState("password");
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const err = { ...errMsg };

    if (name === "nama") {
      if (namaRegex.test(value)) {
        SetErrMsg("");
      } else {
        SetErrMsg({
          ...err,
          nama: <i>Nama Yang Anda Masukan Harus Berupa Huruf</i>,
        });
      }
    } else if (name === "email") {
      if (emailRegex.test(value) || value === "") {
        SetErrMsg("");
      } else {
        SetErrMsg({
          ...err,
          email: <i>Email Yang Anda Masukan Tidak Sesuai</i>,
        });
      }
    } else if (name === "password") {
      if (passwordRegex.test(value) || value === "") {
        SetErrMsg("");
      } else {
        SetErrMsg({
          ...err,
          password: (
            <i>
              Password Yang Anda Masukan Harus Min 8 Karakter Yang Terdiri Dari
              1 Huruf Besar, 1 Huruf Kecil serta 1 Angka
            </i>
          ),
        });
      }
    }

    setData({
      ...data,
      [name]: value,
    });
    console.log("data", data);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (errMsg !== "") {
      alert(
        "Data Pendaftaran Ada Yang Tidak Sesuai Silahkan Anda Cek Kembali Form Pengisian Anda"
      );
    } else {
      alert(`Data Pendaftaran atas nama "${data.nama}"Berhasil Diterima`);
      const newUser = {
        fullName: data.nama,
        email: data.email,
        password: data.password,
      };
      setUser(user.concat(newUser));
      navigate("/login");
    }
  };

  useEffect(() => {
    if (user.length !== 0) {
      console.log(user[0]);
      axiosInstance
        .post("/api/register", user[0])
        .then((response) => {
          console.log(user);
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [user]);

  return (
    <div className="container-fluid">
      <img className="ellipse" src={Ellipse} alt="" />
      <img className="ellipse2" src={Ellipse2} alt="" />
      <div className="row">
        <div className="col bg_primary bg_banner mx-auto py-4">
          <div className="banner">
            <img className="img-fluid" src={Rafiki} alt="banner" />
          </div>
          <h3 className="text-center text-light ">Welcome to Level Up 🙌</h3>
          <p className="text-light text-center">
            Upgrade your skills, increase salary.{" "}
          </p>
        </div>
        <div className="col">
          <div className="row mx-auto py-5" style={{ padding: "54px 95px" }}>
            <h1 className="title">Create Account</h1>
            <p className="text-start mt-1 mb-5">
              Already have an account?
              <button
                className="button-navigate"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </button>
            </p>
            <div>
              <form onSubmit={handleSubmit}>
                <Form.Label className="title">Nama</Form.Label>
                <div className="mb-3 text-start">
                  <input
                    type="text"
                    placeholder="Masukan nama"
                    className="form-control mr-3 mb-4"
                    onChange={handleInput}
                    value={data.nama}
                    name="nama"
                    required
                  ></input>
                  <span className="err-Msg">{errMsg.nama ?? ""}</span>
                </div>
                <Form.Label className="title">Email</Form.Label>
                <div className="mb-3 text-start">
                  <input
                    type="text"
                    placeholder="Masukan email"
                    className="form-control mr-3 mb-4"
                    onChange={handleInput}
                    value={data.email}
                    name="email"
                    required
                  ></input>
                  <span className="err-Msg">{errMsg.email ?? ""}</span>
                </div>
                <Form.Label className="title">Password</Form.Label>
                <div className="input-group">
                  <input
                    required
                    type={passwordType}
                    name="password"
                    value={data.password}
                    onChange={handleInput}
                    placeholder="Enter your password"
                    className={
                      errMsg.password
                        ? `form-control border-end-0 border border-danger`
                        : `form-control border-end-0`
                    }
                  />
                  <span
                    className={
                      errMsg.password
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
                  <i>{errMsg.password}</i>
                </span>
                <div className="d-grid gap-2">
                  <button
                    className="btn bg_primary text-light mt-5"
                    type="submit"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
