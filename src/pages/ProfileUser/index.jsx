import { NavbarUser, PopupLogout } from '../../components';
import { profileUserIcon } from '../../assets';
import { BgUserProfile } from '../../assets';
import { BsFillCameraFill } from 'react-icons/bs';
import Form from 'react-bootstrap/Form';
import './style.css';
import { useState, React } from 'react';
import { useEffect } from 'react';
import axiosInstance from '../../networks/apis';

const Index = () => {
  const [Tab, setTab] = useState('Profile');
  const [ProfileUser, setProfileUser] = useState();
  console.log(Tab);

  const [showLogout, setShowLogout] = useState(false);

  const getUserProfile = async () => {};
  const handleCloseLogout = () => setShowLogout(false);
  const logoutShow = () => {
    setShowLogout(true);
  };

  const [data, setData] = useState({});

  console.log('dataa', data);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({
      ...data,
      [name]: value,
    });

    console.log(data);
  };

  const [success, setSucces] = useState(false);

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
      .put(`api/auth/profile/image`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((response) => {
        // console.log("from API Mentor", response.data.data);
        setSucces(!success);
      })
      .catch((error) => console.log(error));
  };

  useEffect(async () => {
    await axiosInstance
      .get(`api/auth/profile`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((response) => {
        // console.log("getAllContentByCourseId ", response.data.data);
        let res = response.data.data;
        setProfileUser(res);
        setData({
          full_name: res.user.full_name,
          email: res.user.email,
          phone_number: res.phone_number,
        });
      })
      .catch((error) => console.log(error));
  }, [success]);

  console.log(ProfileUser);

  const updateProfileUser = async (data) => {
    await axiosInstance
      .put(`api/auth/profile`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((response) => {
        // let res = response.data.data;
        setSucces(!success);
      })
      .catch((error) => console.log(error));
  };

  const handleSubmitProfileUser = async (e) => {
    e.preventDefault();

    const datasubmit = {
      full_name: data.full_name,
      email: data.email,
      phone_number: data.phone_number,
      date_of_brith: '01-01-1999',
      gender: 'MALE',
      role: 'Costumer Service',
      status: 'FullTime',
      address: 'Jalan Tan Malaka',
      employee_id: '123456',
    };
    await updateProfileUser(datasubmit);

    // console.log(datasubmit);
  };
  return (
    <div>
      <NavbarUser />
      <img src={BgUserProfile} alt="bguserProfile" className="bguserProfile" />
      <div className="mb-2">
        <img
          src={ProfileUser?.url_image || profileUserIcon}
          alt=""
          className="fotouserProfile"
        />
        <div className="edit-user-profile bg_primary ">
          <BsFillCameraFill className="icons-edit" />
          <input
            name="image"
            onChange={handleFileUpload}
            type="file"
            accept="image/png, image/jpg, image/gif, image/jpeg"
            className="input-profile-img"
          />
        </div>
      </div>
      <div className="titleprofileUser">
        <div className="titlenameUser">{ProfileUser?.user.full_name}</div>
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
              <input
                type="text"
                className="form-control form-profileuser"
                value={ProfileUser?.user.full_name}
              />
            </div>
            <div className="mb-3">
              <label className="label-formprofile">Email</label>
              <input
                type="email"
                className="form-control form-profileuser"
                value={ProfileUser?.user.email}
              />
            </div>
            <div className="mb-3">
              <label class="label-formprofile">Phone Number</label>
              <input
                type="phone"
                className="form-control form-profileuser"
                value={ProfileUser?.phone_number}
              />
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
          <form
            className="main-formuserEdit"
            onSubmit={handleSubmitProfileUser}
          >
            <div className="mb-4 heading_5">Edit Profile</div>
            <div className="mb-3">
              <label className="label-formedit">Full Name</label>
              <input
                type="text"
                className="form-control form-editUser"
                value={data.full_name}
                name="full_name"
                onChange={handleInput}
              />
            </div>
            <div className="mb-3">
              <label className="label-formedit">Email</label>
              <input
                type="email"
                className="form-control form-editUser"
                value={data?.email}
                name="email"
                onChange={handleInput}
              />
            </div>
            <div className="mb-3">
              <label class="label-formresetpass">Phone Number</label>
              <input
                type="phone"
                className="form-control form-editUser"
                value={data.phone_number}
                name="phone_number"
                onChange={handleInput}
              />
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
