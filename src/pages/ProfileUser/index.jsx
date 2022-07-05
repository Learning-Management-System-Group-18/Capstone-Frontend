import React from 'react';
import { NavbarUser } from '../../components';
import { BgUserProfile } from '../../assets';
import { BsFillCameraFill } from 'react-icons/bs';
import Form from 'react-bootstrap/Form';
import './style.css';

const Index = () => {
  return (
    <div>
      <NavbarUser />
      <img src={BgUserProfile} alt="bguserProfile" className="bguserProfile" />
      <img
        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80"
        alt=""
        className="fotouserProfile"
      />
      <BsFillCameraFill className="iconCamera" />
      <div className="titleprofileUser">
        <input value="Nirmala Reza" className="titlenameUser" />
        <p className="contentnameUser">
          Your account is ready, you can enroll the course
        </p>
      </div>
      <div className="d-flex mainUserProfile">
        <div className="p-2 gap-4 button-profileUser">
          <button type="button" className="btn btn-profileuser">
            Profile
          </button>
          <button type="button" className="btn btn-editprofileuser">
            Edit Profile
          </button>
          <button type="button" className="btn btn-resetprofileuser">
            Reset Password
          </button>
        </div>
        <div className="p-2 ms-5 bg-formuserProfile">
          {/* <- Start -> This Form For Page Profile */}
          <form className="main-formuserProfile">
            <div className="mb-4 heading_5">Data Personal</div>
            <div className="mb-3">
              <label className="label-formprofile">Full Name</label>
              <input type="text" className="form-control form-profileuser" />
            </div>
            <div className="mb-3">
              <label className="label-formprofile">Email</label>
              <input type="email" className="form-control form-profileuser" />
            </div>
            <div className="mb-3">
              <label class="label-formprofile">Phone Number</label>
              <input type="phone" className="form-control form-profileuser" />
            </div>
          </form>
          {/* <- End -> This Form For Page Profile */}
        </div>
      </div>
    </div>
  );
};

export default Index;
