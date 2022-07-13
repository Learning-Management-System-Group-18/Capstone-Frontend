import React from 'react';
import { NavbarUser, FooterUser, PopularClassCard } from '../../components';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useEffect, useState } from 'react';
import axiosInstance from '../../networks/apis';
import './style.css';

const Index = () => {
  const [popularCourse, setPopularCourse] = useState([]);
  useEffect(() => {
    axiosInstance
      .get('/api/course/popular')
      .then((response) => {
        console.log(response.data.data);
        setPopularCourse(...popularCourse, response.data.data);
        // console.log(popularCourse);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <NavbarUser />

      <div className="container d-flex justify-content-between py-5 px-4">
        <div className="titleClassCategory"> Marketing </div>
        <DropdownButton
          id="dropdown-basic-button"
          title="Filter by level"
          className="filterClassCategory"
        >
          <Dropdown.Item className="dropitem-ClassCategory">
            Beginner
          </Dropdown.Item>
          <Dropdown.Item className="dropitem-ClassCategory">
            Intermediate
          </Dropdown.Item>
          <Dropdown.Item className="dropitem-ClassCategory">
            Advaced
          </Dropdown.Item>
        </DropdownButton>
      </div>

      <PopularClassCard data={popularCourse} />

      <footer>
        <FooterUser />
      </footer>
    </>
  );
};

export default Index;
