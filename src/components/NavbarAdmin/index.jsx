import { React, useState } from 'react';
import './style.css';
import { Link, useLocation } from 'react-router-dom';
import { Dropdown, NavDropdown, Nav, Navbar, Container } from 'react-bootstrap';
import { logoutIcon } from '../../assets';
import { PopupLogout } from '../';

const Index = () => {
  const location = useLocation();
  const locationLink = location.pathname;
  const link = locationLink.split('/');
  // console.log(link[1]);

  const [showLogout, setShowLogout] = useState(false);

  const handleCloseLogout = () => setShowLogout(false);
  const logoutShow = () => {
    setShowLogout(true);
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark navbar-admin">
        <div className="container">
          <Link to="/dashboard" className="navbar-brand">
            Logo
          </Link>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <Nav className="mx-auto">
              <Nav>
                <Link
                  to="/dashboard"
                  className={`${
                    link[1] == 'dashboard' ? `item-nav decoration` : `item-nav`
                  }`}
                >
                  Dasboard
                </Link>
              </Nav>
              <Nav>
                <Link
                  to="/order"
                  className={`${
                    link[1] == 'order' ? `item-nav decoration` : `item-nav`
                  }`}
                >
                  Order
                </Link>
              </Nav>
              <Nav>
                {/* <NavDropdown
                  title="Profile"
                  id="basic-nav-dropdown"
                  className={`${
                    link[1] == 'profile' ? `drop-nav decoration` : `drop-nav`
                  }`}
                  style={{ color: 'white' }}
                >
                  <NavDropdown.Item className="drop-item-nav">
                    <Link to="/profile">Account Setting</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="drop-item-nav"
                    onClick={logoutShow}
                  >
                    Logout
                    <img src={logoutIcon} className="ms-2" />
                  </NavDropdown.Item>
                  <PopupLogout
                    show={showLogout}
                    handleClose={handleCloseLogout}
                  />
                </NavDropdown> */}

                <div
                  className={`${
                    link[1] == 'profile'
                      ? `dropdown-admin decoration`
                      : `dropdown-admin`
                  }`}
                >
                  <button className="dropbtn-admin">Profile</button>
                  <div className="dropdown-content-admin">
                    <Link to="/profile">Account Setting</Link>
                    <div
                      className="px-3 py-2 "
                      style={{ background: 'white' }}
                      onClick={logoutShow}
                    >
                      Logout
                      <img src={logoutIcon} className="ms-4" />
                    </div>
                    <PopupLogout
                      show={showLogout}
                      handleClose={handleCloseLogout}
                    />
                  </div>
                </div>
              </Nav>
            </Nav>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Index;
