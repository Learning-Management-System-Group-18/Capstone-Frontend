import { NavbarUser, PopupLogout } from '../../components';
import { BgUserProfile } from '../../assets';
import { BsFillCameraFill } from 'react-icons/bs';
import Form from 'react-bootstrap/Form';
import './style.css';
import { useState, React } from 'react';

const Index = () => {
  const [Tab, setTab] = useState('Profile');
  console.log(Tab);

  const [showLogout, setShowLogout] = useState(false);

  const handleCloseLogout = () => setShowLogout(false);
  const logoutShow = () => {
    setShowLogout(true);
  };
  return (
    <div>
      <NavbarUser />
      <img src={BgUserProfile} alt="bguserProfile" className="bguserProfile" />
      <div className="mb-2">
        <img
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80"
          alt=""
          className="fotouserProfile"
        />
        <div className="edit-user-profile bg_primary ">
          <BsFillCameraFill className="icons-edit" />
          <input
            type="file"
            accept="image/png, image/jpg, image/gif, image/jpeg"
            className="input-profile-img"
          />
        </div>
      </div>
      <div className="titleprofileUser">
        <div className="titlenameUser">Nirmala Reza</div>
        <p className="contentnameUser">
          Your account is ready, you can enroll the course
        </p>
      </div>
      <div className="d-flex mainUserProfile">
        <div className="p-2 gap-4 button-profileUser">
          <button
            type="button"
            className={
              Tab === `Profile`
                ? `btn btn-profileuser decoration-btnprofile`
                : `btn btn-profileuser`
            }
            onClick={() => setTab('Profile')}
          >
            Profile
          </button>
          <button
            type="button"
            className={
              Tab === `EditProfile`
                ? `btn btn-editprofileuser decoration-btnprofile`
                : `btn btn-editprofileuser`
            }
            onClick={() => setTab('EditProfile')}
          >
            Edit Profile
          </button>
          <button
            type="button"
            className={
              Tab === `ResetPasswordUser`
                ? `btn btn-resetprofileuser decoration-btnprofile`
                : `btn btn-resetprofileuser`
            }
            onClick={() => setTab('ResetPasswordUser')}
          >
            Reset Password
          </button>
          <button type="button" className="btn-logoutUser" onClick={logoutShow}>
            Logout
          </button>
          <PopupLogout show={showLogout} handleClose={handleCloseLogout} />
        </div>
        {/* <- Start -> This For From Profile */}
        <div
          className={
            Tab === `Profile` ? `p-2 ms-5 bg-formuserProfile` : `d-none`
          }
        >
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
        </div>
        {/* <- End -> This For Form Profile */}

        {/* <- Start -> This For From Edit Password */}

        <div
          className={
            Tab === `ResetPasswordUser`
              ? `p-2 ms-5 bg-formuserResetPass`
              : `d-none`
          }
        >
          <form className="main-formuserResetPass">
            <div className="mb-4 heading_5">Reset Password</div>
            <div className="mb-3">
              <label className="label-formresetpass">Password</label>
              <input
                type="password"
                className="form-control form-resetpassUser"
              />
            </div>
            <div className="mb-3">
              <label className="label-formresetpass">New Password</label>
              <input
                type="password"
                className="form-control form-resetpassUser"
              />
            </div>
            <div className="mb-3">
              <label class="label-formresetpass">Phone Number</label>
              <input
                type="password"
                className="form-control form-resetpassUser"
              />
            </div>
            <button className="btn btn-saveprofile">Save</button>
          </form>
        </div>

        {/* <- End -> This For Form Edit Password  */}

        {/* <- Start -> This For From Edit Profile */}
        <div
          className={
            Tab === `EditProfile` ? `p-2 ms-5 bg-formuserEdit` : `d-none`
          }
        >
          <form className="main-formuserEdit">
            <div className="mb-4 heading_5">Edit Profile</div>
            <div className="mb-3">
              <label className="label-formedit">Full Name</label>
              <input type="text" className="form-control form-editUser" />
            </div>
            <div className="mb-3">
              <label className="label-formedit">Email</label>
              <input type="email" className="form-control form-editUser" />
            </div>
            <div className="mb-3">
              <label class="label-formresetpass">Phone Number</label>
              <input type="phone" className="form-control form-editUser" />
            </div>
            <button className="btn btn-saveprofile">Save</button>
          </form>
        </div>
        {/* <- End -> This For Form Edit Profile  */}
      </div>
    </div>
  );
};

export default Index;
