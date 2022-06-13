import React from 'react';
import './style.css';

const index = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <a class="navbar-brand" href="#">
          Logo
        </a>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav mx-auto">
            <a class="nav-item decoration">Dasboard</a>
            <a class="nav-item ">Order</a>
            <a class="nav-item ">Profile</a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default index;
