import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import banner_img from "../../assets/banner_img.svg";
import { axiosInstance } from "../../networks/apis";
import { Button, Card } from "../../components";

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
  const [errMsg, SetErrMsg] = useState({
    nama: "",
    email: "",
    password: "",
  });

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
    }
  };

  useEffect(() => {
    if (user.length !== 0) {
      console.log(user[0]);
      axiosInstance
        .post("/register", user[0])
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
      <div className="row">
        <div className="col bg_primary bg_banner mx-auto py-4">
          <img className="img-fluid" src={banner_img} alt="banner" />
          <h3 className="text-center text-light mt-5">
            Welcome to Level Up 🙌
          </h3>
          <p className="text-light text-center">
            Upgrade your skills, increase salary.{" "}
          </p>
        </div>
        <div className="col">
          <div className="row mx-auto py-5" style={{ padding: "54px 95px" }}>
            <h1 className="title">Create Account</h1>
            <p className="text-start mt-1 mb-5">
              Already have an account? Login{" "}
            </p>
            <div>
              <form onSubmit={handleSubmit}>
                <div className="mb-3 text-start">
                  <label className="form-label">Name</label>
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
                <div className="mb-3 text-start">
                  <label className="form-label">Email</label>
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
                <div className="mb-3 text-start">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    placeholder="Masukan password"
                    className="form-control mr-3 mb-4"
                    onChange={handleInput}
                    value={data.password}
                    name="password"
                    required
                  ></input>
                  <span className="err-Msg">{errMsg.password ?? ""}</span>
                </div>
                <div className="d-grid gap-2">
                  <button
                    className="btn bg_primary text-light mt-5"
                    type="submit"
                  >
                    Sign Up
                  </button>
                  <p className="my-3">
                    <b>or</b>
                  </p>
                  <button className="btn button_2">
                    Sign Up with company email
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
