import React from "react";
import { NavbarAdmin } from "../../components";
import { Form, Button } from "react-bootstrap";
import { ProfileImg } from "../../assets";
import { BsFillStarFill } from "react-icons/bs";
import { FaPen } from "react-icons/fa";
import "./style.css";

const Index = () => {
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
                      src={ProfileImg}
                      alt
                      className="img-fluid img-profile"
                    />
                    <div className="edit-user bg_primary ">
                      <FaPen className="icons-edit" />
                      <input
                        type="file"
                        accept="image/png, image/jpg, image/gif, image/jpeg"
                        className="input-profile-img"
                      />
                    </div>
                  </div>

                  <div className="heading_5">Latifa Salsabila - 346532</div>
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
                      <input type="text" className="form-control radius-8" />
                    </div>

                    <div className="form-group col-12 mt-4">
                      <label className="label-input-user neutral_5">
                        Email
                      </label>
                      <input type="email" className="form-control radius-8" />
                    </div>
                    <div className="form-group col-12 mt-4">
                      <label className="label-input-user neutral_5">
                        Phone Number
                      </label>
                      <input type="number" className="form-control radius-8" />
                    </div>

                    <div className="form-group col-6 mt-4">
                      <label className="label-input-user neutral_5">
                        Date of Birth
                      </label>
                      <input
                        type="date"
                        className="form-control radius-8 neutral_3"
                      />
                    </div>
                    <div className="form-group col-6 mt-4">
                      <label className="label-input-user neutral_5">
                        Gender
                      </label>
                      <Form.Select className="neutral_3 radius-8">
                        <option value="Man">Man</option>
                        <option value="Woman">Woman</option>
                      </Form.Select>
                    </div>

                    <div className="heading_5 neutral_3 mb-4 mt-5 ">
                      Company Data
                    </div>
                    <div className="form-group col-6">
                      <label className="label-input-user neutral_5">
                        Employee ID
                      </label>
                      <input type="number" className="form-control radius-8" />
                    </div>
                    <div className="form-group col-6">
                      <label className="label-input-user neutral_5">Role</label>
                      <input type="text" className="form-control radius-8" />
                    </div>

                    <div className="form-group col-6 mt-4">
                      <label className="label-input-user neutral_5">
                        Status
                      </label>
                      <input type="text" className="form-control radius-8" />
                    </div>

                    <div className="form-group col-6 mt-4">
                      <label className="label-input-user neutral_5">
                        Hire Date
                      </label>
                      <input
                        type="date"
                        className="form-control radius-8 neutral_3"
                      />
                    </div>

                    <div className="form-group col-12 mt-4">
                      <label className="label-input-user neutral_5">
                        Address
                      </label>
                      <input type="text" className="form-control radius-8" />
                    </div>

                    <Button
                      className="col-8 offset-2 bg_primary subtitle_2 mt-5 mb-4 py-3 px-4 radius-12"
                      disabled={true}
                    >
                      Save Changes
                    </Button>
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
