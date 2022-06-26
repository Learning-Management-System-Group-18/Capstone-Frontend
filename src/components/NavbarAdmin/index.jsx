import React from 'react';
import './style.css';
import { Link, useLocation } from 'react-router-dom';
import { Dropdown, NavDropdown, Nav, Navbar, Container } from 'react-bootstrap';
import { logoutIcon } from '../../assets';

const Index = () => {
  const location = useLocation();
  const locationLink = location.pathname;
  console.log(location.pathname);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <Link to="/dashboard" class="navbar-brand">
            Logo
          </Link>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <Nav className="mx-auto">
              <Nav>
                <Link
                  to="/dashboard"
                  className={`${
                    locationLink == '/dashboard'
                      ? `item-nav decoration`
                      : `item-nav`
                  }`}
                >
                  Dasboard
                </Link>
              </Nav>
              <Nav>
                <Link
                  to="/order"
                  className={`${
                    locationLink == '/order'
                      ? `item-nav decoration`
                      : `item-nav`
                  }`}
                >
                  Order
                </Link>
              </Nav>
              <Nav>
                <NavDropdown
                  title="Profile"
                  id="basic-nav-dropdown"
                  className={`${
                    locationLink == '/profile'
                      ? `drop-nav decoration`
                      : `drop-nav`
                  }`}
                >
                  <NavDropdown.Item className="drop-item-nav">
                    <Link to="/profile">Account Setting</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item className="drop-item-nav">
                    Logout <img src={logoutIcon} className="ms-2" />
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Nav>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Index;
