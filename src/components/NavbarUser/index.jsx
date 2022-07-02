import { React, useState } from 'react';
import './style.css';
import { Dropdown, NavDropdown, Nav, Navbar, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { navUserIcon, profileUserIcon } from '../../assets';

const Index = () => {
  const location = useLocation();
  const locationLink = location.pathname;
  const link = locationLink.split('/');

  // const [showLogout, setShowLogout] = useState(false);

  // const handleCloseLogout = () => setShowLogout(false);
  // const logoutShow = () => {
  //   setShowLogout(true);
  // };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" id="nav-user">
      <div className="container ms-4">
        <Link to="/home">
          <img src={navUserIcon} alt="navUserIcon" className="icon-navuser" />
        </Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <Nav className="mx-auto">
            <Nav>
              <Link
                to="/home"
                className={`${
                  link[1] == 'home'
                    ? `item-nav-user decorationuser`
                    : `item-nav-user`
                }`}
              >
                Home
              </Link>
            </Nav>
            <Nav>
              <Link
                to="/mycourse"
                className={`${
                  link[1] == 'myclass'
                    ? `item-nav-user decorationuser`
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
                    ? `drop-nav-user decorationuser`
                    : `drop-nav-user`
                }`}
                style={{ color: 'black' }}
              >
                <NavDropdown.Item className="drop-item-nav-user">
                  <Link to="/none">None</Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="drop-item-nav-user">
                  <Link to="/none">None</Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Nav>
        </div>
      </div>
      <div className="searchNavUser">
        <FiSearch className="icon-searchusernav" />
        <input
          type="text"
          placeholder="Social media specialist"
          className="input-searchnav-user"
        ></input>
      </div>
      <div className="iconProfileUser">
        <img src={profileUserIcon} className="img-usernav" alt="icon" />
      </div>
    </nav>
  );
};

export default Index;
