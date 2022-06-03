import React, { useState } from 'react';
import './style.css';

const RegisterUser = () => {
  const newData = {
    nama: '',
    email: '',
    password: '',
  };
  const [data, setData] = useState(newData);
  const namaRegex = /^[A-Za-z ]*$/;
  const emailRegex = /\S+@\S+\.\S+/;
  const passwordRegex = /^(?:\d{9}|\d{14})$/;
  const [errMsg, SetErrMsg] = useState({
    nama: '',
    email: '',
    password: '',
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const err = { ...errMsg };

    if (name === 'nama') {
      if (namaRegex.test(value)) {
        SetErrMsg('');
      } else {
        SetErrMsg({
          ...err,
          nama: 'Nama Yang Anda Masukan Harus Berupa Huruf',
        });
      }
    } else if (name == 'email') {
      if (emailRegex.test(value)) {
        SetErrMsg('');
      } else {
        SetErrMsg({
          ...err,
          email: 'Email Yang Anda Masukan Tidak Sesuai',
        });
      }
    } else if (name == 'password') {
      if (passwordRegex.test(value)) {
        SetErrMsg('');
      } else {
        SetErrMsg({
          ...err,
          password: 'Password Yang Anda Masukan Harus Berupa 9-14 Karakter',
        });
      }
    }

    setData({
      ...data,
      [name]: value,
    });
    console.log('data', data);
  };

  const handleSumbit = (event) => {
    event.preventDefault();
    if (errMsg !== '') {
      alert(
        'Data Pendaftaran Ada Yang Tidak Sesuai Silahkan Anda Cek Kembali Form Pengisian Anda'
      );
    } else {
      alert(`Data Pendaftaran atas nama "${data.nama}"Berhasil Diterima`);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col bg_banner mx-auto py-4">
          <img
            className="img-fluid"
            src="https://images.unsplash.com/photo-1523289333742-be1143f6b766?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="banner"
          />
          <h5 className="text-center mt-3 position_text_title">
            Welcome to Level Up Please Sign Up Here
          </h5>
          <p className="position_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            consequat mi amet maecenas cursus tellus.{' '}
          </p>
        </div>
        <div className="col">
          <div className="row mx-auto py-4">
            <h1 className="title">Create Account</h1>
            <p className="text-start mt-1 mb-5">
              Already have an account? Login{' '}
            </p>
            <div>
              <form>
                <input
                  type="text"
                  placeholder="Masukan nama"
                  className="form-control mr-3 mb-4"
                  onChange={handleInput}
                  value={data.nama}
                  name="nama"
                  required
                ></input>
                <span className="err-Msg">{errMsg.nama ?? ''}</span>
                <input
                  type="text"
                  placeholder="Masukan email"
                  className="form-control mr-3 mb-4"
                  onChange={handleInput}
                  value={data.email}
                  name="email"
                  required
                ></input>
                <span className="err-Msg">{errMsg.email ?? ''}</span>
                <input
                  type="text"
                  placeholder="Masukan password"
                  className="form-control mr-3 mb-4"
                  onChange={handleInput}
                  value={data.password}
                  name="password"
                  required
                ></input>
                <span className="err-Msg">{errMsg.password ?? ''}</span>
              </form>
              <div className="d-grid gap-2">
                <input
                  className="btn button mt-5"
                  type="submit"
                  value="Sign Up"
                  onClick={handleSumbit}
                />
                <p className="my-3">
                  <b>or</b>
                </p>
                <button className="btn button_2">
                  Sign Up with company email
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterUser;
