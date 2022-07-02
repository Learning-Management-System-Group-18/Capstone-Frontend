import React from 'react';
import './style.css';

const Index = () => {
  return (
    <div className="bg-footer container-fluid">
      <div className="row">
        <div className="col-md-4 titlefooteruser">
          Oncourse
          <p className="contentuser1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            tenetur quas quia quasi maiores vel, provident ab amet voluptatum
            nesciunt id eveniet minus libero? Aliquid sint at beatae ab. Culpa.
          </p>
        </div>
        <div className="col-md-2 titlefooteruser">
          Service
          <ul className="list-unstyled contentuser2 ">
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
          </ul>
        </div>
        <div className="col-md-2 titlefooteruser">
          Company
          <ul className="list-unstyled contentuser2 ">
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
          </ul>
        </div>
        <div className="col-md-2 titlefooteruser">
          Term
          <ul className="list-unstyled contentuser2 ">
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
          </ul>
        </div>
        <div className="col-md-2 titlefooteruser">
          Course
          <ul className="list-unstyled contentuser2 ">
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
          </ul>
        </div>
        <div className="md12">icon</div>
        <div className="md-12">
          <p className="text-xs-center">
            &copy;{new Date().getFullYear()}Courses.com - All Right Reserved
          </p>
        </div>
      </div>
      <a href="#" class="up-icon">
        <i class="fas fa-chevron-circle-up"></i>
      </a>
    </div>
  );
};

export default Index;
