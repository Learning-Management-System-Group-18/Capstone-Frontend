import React from "react";
import { NavbarAdmin, Button } from "../../components";
import { Form } from "react-bootstrap";
import { profileUserIcon } from "../../assets";
import { FaPen } from "react-icons/fa";
import "./style.css";
import { useState, useEffect } from "react";
import axiosInstance from "../../networks/apis";

const Index = () => {
  const [data, setData] = useState({});

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({
      ...data,
      [name]: value,
    });

    // console.log(data);
  };

  const [success, setSucces] = useState(false);

  const getDataProfile = async () => {
    await axiosInstance
      .get(`/api/auth/profile`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        // console.log("getProfile ", response);
        let res = response.data.data;
        setData({
          full_name: res.user.full_name,
          email: res.user.email,
          phone_number: res.phone_number,
          address: res.address,
          date_of_birth: res.date_of_birth,
          employee_id: res.employee_id,
          gender: res.gender,
          id: res.id,
          status: res.status,
          role: res.role,
          url_image: res.url_image,
        });
      })
      .catch((error) => console.log(error));
  };

  const updateProfile = async (data) => {
    await axiosInstance
      .put(`/api/auth/profile`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        // let res = response.data.data;
        setSucces(!success);
      })
      .catch((error) => console.log(error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newData = {
      phone_number: data.phone_number,
      date_of_birth: data.date_of_birth,
      gender: data.gender,
      role: data.role,
      status: data.status,
      address: data.address,
      employee_id: data.employee_id,
    };

    updateProfile(newData);

    // console.log(newData);
  };

  const handleFileUpload = async (e) => {
    if (e.target.files[0]) {
      const xyz = {
        image: e.target.files[0],
      };

      await editImgProfileUser(xyz);
      window.location.reload();
    }
  };

  const editImgProfileUser = async (data) => {
    await axiosInstance
      .put(`/api/auth/profile/image`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        // console.log("from API Mentor", response.data.data);
        setSucces(!success);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getDataProfile();
  }, []);

  useEffect(() => {
    getDataProfile();
  }, [success]);
  return (
    <>
      <NavbarAdmin />
      <div className="background-profile pb-4   ">
        <div className="container">
          <div className="row">
            <div className="col-12 mt-4">
              <div className="heading_5">Account Setting</div>
            </div>

            <div className="col-4 mt-3">
              <div className="wrap-user pb-3">
                <div className="d-flex flex-column justify-content-center align-items-center py-3">
                  <div className="img-profile mb-5">
                    <img
                      name="image"
                      src={data?.url_image || profileUserIcon}
                      alt
                      className="img-fluid img-profile"
                    />
                    <div className="edit-user bg_primary ">
                      <FaPen className="icons-edit" />
                      <input
                        type="file"
                        accept="image/png, image/jpg, image/gif, image/jpeg"
                        className="input-profile-img"
                        onChange={handleFileUpload}
                      />
                    </div>
                  </div>

                  <div className="heading_5">
                    {data?.full_name + " - " + data?.employee_id}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-8 mt-3 ">
              <div className="wrap-data-user">
                <div className="container">
                  <form className="row">
                    <div className="heading_5 neutral_3 mb-4 mt-3 ">
                      Personal Data
                    </div>
                    <div className="form-group col-12">
                      <label className="label-input-user neutral_5">
                        Fullname
                      </label>
                      <input
                        type="text"
                        className="form-control radius-8"
                        name="full_name"
                        value={data?.full_name}
                        disabled
                      />
                    </div>

                    <div className="form-group col-12 mt-4">
                      <label className="label-input-user neutral_5">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control radius-8"
                        name="email"
                        value={data?.email}
                        disabled
                      />
                    </div>
                    <div className="form-group col-12 mt-4">
                      <label className="label-input-user neutral_5">
                        Phone Number
                      </label>
                      <input
                        type="number"
                        className="form-control radius-8"
                        name="phone_number"
                        value={data?.phone_number}
                        onChange={handleInput}
                      />
                    </div>

                    <div className="form-group col-6 mt-4">
                      <label className="label-input-user neutral_5">
                        Date of Birth
                      </label>
                      <input
                        type="date"
                        className="form-control radius-8 neutral_3"
                        name="date_of_birth"
                        value={data?.date_of_birth}
                        onChange={handleInput}
                      />
                    </div>
                    <div className="form-group col-6 mt-4">
                      <label className="label-input-user neutral_5">
                        Gender
                      </label>
                      <Form.Select
                        className="neutral_3 radius-8"
                        onChange={handleInput}
                        name="gender"
                        value={data?.gender}
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </Form.Select>
                    </div>

                    <div className="heading_5 neutral_3 mb-4 mt-5 ">
                      Company Data
                    </div>
                    <div className="form-group col-6">
                      <label className="label-input-user neutral_5">
                        Employee ID
                      </label>
                      <input
                        type="number"
                        className="form-control radius-8"
                        name="employee_id"
                        value={data?.employee_id}
                        disabled
                      />
                    </div>
                    <div className="form-group col-6">
                      <label className="label-input-user neutral_5">Role</label>
                      <input
                        type="text"
                        className="form-control radius-8"
                        name="role"
                        value={data?.role}
                        onChange={handleInput}
                      />
                    </div>

                    <div className="form-group col-6 mt-4">
                      <label className="label-input-user neutral_5">
                        Status
                      </label>
                      <input
                        type="text"
                        className="form-control radius-8"
                        name="status"
                        value={data?.status}
                        onChange={handleInput}
                      />
                    </div>

                    <div className="form-group col-6 mt-4">
                      <label className="label-input-user neutral_5">
                        Hire Date
                      </label>
                      <input
                        type="date"
                        className="form-control radius-8 neutral_3"
                        disabled
                      />
                    </div>

                    <div className="form-group col-12 mt-4">
                      <label className="label-input-user neutral_5">
                        Address
                      </label>
                      <input
                        type="text"
                        className="form-control radius-8"
                        name="address"
                        value={data?.address}
                        onChange={handleInput}
                      />
                    </div>

                    <div className="text-center mt-5 mb-4">
                      <Button
                        type={"btn-savechange-profile"}
                        onClick={(e) => handleSubmit(e)}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
