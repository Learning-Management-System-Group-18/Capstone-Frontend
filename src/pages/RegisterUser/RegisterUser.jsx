import React, { useState } from 'react';
import './style.css';
import banner_img from '../../assets/banner_img.svg';

const RegisterUser = () => {
  const newData = {
    nama: '',
    email: '',
    password: '',
  };
  const [data, setData] = useState(newData);
  const namaRegex = /^[A-Za-z ]*$/;
  const emailRegex = /\S+@\S+\.\S+/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
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
    } else if (name === 'email') {
      if (emailRegex.test(value) || value === '') {
        SetErrMsg('');
      } else {
        SetErrMsg({
          ...err,
          email: 'Email Yang Anda Masukan Tidak Sesuai',
        });
      }
    } else if (name === 'password') {
      if (passwordRegex.test(value) || value === '') {
        SetErrMsg('');
      } else {
        SetErrMsg({
          ...err,
          password: 'Password Yang Anda Masukan Harus Terdiri Dari minimal 8 Karakter ,1 Huruf Besar , 1 Huruf Kecil Dan 1 Angka',
        });
      }
    }

    setData({
      ...data,
      [name]: value,
    });
    console.log('data', data);
  };

  const handleSubmit = (event) => {
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
        <div className="col bg_primary bg_banner mx-auto py-4">
          <img
            className="img-fluid"
            src={banner_img}
            alt="banner"
          />
          <h3 className="text-center text-light mt-5">
            Welcome to Level Up 🙌
          </h3>
          <p className="text-light text-center">
            Upgrade your skills, increase salary.{' '}
          </p>
        </div>
        <div className="col">
          <div className="row mx-auto py-4">
            <h1 className="title">Create Account</h1>
            <p className="text-start mt-1 mb-5">
              Already have an account? Login{' '}
            </p>
            <div>
              <form onSubmit={handleSubmit}>
                <div className='mb-3 text-start'>
                  <label className='form-label'>Name</label>
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
                </div>
                <div className='mb-3 text-start'>
                  <label className='form-label'>Email</label>
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
                </div>
                <div className='mb-3 text-start'>
                  <label className='form-label'>Password</label>
                  <input
                    type="password"
                    placeholder="Masukan password"
                    className="form-control mr-3 mb-4"
                    onChange={handleInput}
                    value={data.password}
                    name="password"
                    required
                  ></input>
                  <span className="err-Msg">{errMsg.password ?? ''}</span>
                </div>
                <div className="d-grid gap-2">
                  <button
                    className="btn button bg_primary mt-5"
                    type="submit"
                  >Sign Up</button>
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

export default RegisterUser;
