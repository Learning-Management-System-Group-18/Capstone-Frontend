import { React, useState, useEffect } from 'react';
import './style.css';
import { Dropdown, NavDropdown, Nav, Navbar, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { navUserIcon, profileUserIcon } from '../../assets';
import axiosInstance from '../../networks/apis';

const Index = () => {
  const location = useLocation();
  const locationLink = location.pathname;
  const link = locationLink.split('/');

  // const [showLogout, setShowLogout] = useState(false);

  // const handleCloseLogout = () => setShowLogout(false);
  // const logoutShow = () => {
  //   setShowLogout(true);
  // };

  const [ProfileUser, setProfileUser] = useState();

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
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" id="nav-user">
      <div className="container ms-4">
        <Link to="/">
          <img src={navUserIcon} alt="navUserIcon" className="icon-navuser" />
        </Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <Nav className="mx-auto">
            <Nav>
              <Link
                to="/home"
                className={`${
                  link[1] == 'home'
                    ? `item-nav-user decoration-Navuser `
                    : `item-nav-user`
                }`}
              >
                Home
              </Link>
            </Nav>
            <Nav>
              <Link
                to="/my-class"
                className={`${
                  link[1] == 'my-class'
                    ? `item-nav-user decoration-Navuser `
                    : `item-nav-user`
                }`}
              >
                My Course
              </Link>
            </Nav>
            <Nav>
              <NavDropdown
                title="Category"
                id="basic-nav-dropdown"
                className={`${
                  link[1] == 'profile'
                    ? `drop-nav-user decoration-Navuser`
                    : `drop-nav-user`
                }`}
                style={{ color: 'black' }}
              >
                <NavDropdown.Item className="drop-item-nav-user">
                  <Link to="/none">Web & Mobile Developer</Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="drop-item-nav-user">
                  <Link to="/none">UI/UX Designer</Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="drop-item-nav-user">
                  <Link to="/none">Business Development</Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="drop-item-nav-user">
                  <Link to="/none">Finance & Accounting</Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="drop-item-nav-user">
                  <Link to="/none">Data Analyst</Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="drop-item-nav-user gap">
                  <Link to="/none">Marketing</Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="drop-item-nav-user">
                  <Link to="/none">Career Preparation</Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Nav>
        </div>
      </div>
      <div className="navuser-Search">
        <FiSearch className="navuser-SearchIcon" />
        <input
          type="text"
          placeholder="Social media specialist"
          className="navuser-SearchInput"
        ></input>
      </div>
      <div className="iconProfileUser">
        <Link to="/user-profile">
          <img
            src={ProfileUser?.url_image || profileUserIcon}
            className="img-usernav"
            alt="icon"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Index;
