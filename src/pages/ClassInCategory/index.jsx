import React from 'react';
import { NavbarUser, FooterUser, PopularClassCard } from '../../components';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './style.css';

const Index = () => {
  const data = [
    {
      img: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=812&q=80',
      title: 'Overview of Data Analyst',
      price: 'Free Course',
      class_level: 'Intermediate',
      total_employee: '70',
      star: '4.5',
      total_review: '65',
    },
    {
      img: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=812&q=80',
      title: 'Overview of Data Analyst',
      price: 'Free Course',
      class_level: 'Intermediate',
      total_employee: '70',
      star: '4.5',
      total_review: '65',
    },
    {
      img: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=812&q=80',
      title: 'Overview of Data Analyst',
      price: 'Free Course',
      class_level: 'Intermediate',
      total_employee: '70',
      star: '4.5',
      total_review: '65',
    },
  ];
  return (
    <div>
      <NavbarUser />
      <div className="container d-flex justify-content-between py-5 px-4">
        <input className="titleClassCategory" value="Marketing" />
        <DropdownButton
          id="dropdown-basic-button"
          title="Filter by level"
          className="filterClassCategory"
        >
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
      </div>
      <div className="contentClassInCategory">
        <PopularClassCard data={data} />
        <PopularClassCard data={data} />
        <PopularClassCard data={data} />
      </div>
      <div className="footerClassInCaterogry">
        <footer>
          <FooterUser />
        </footer>
      </div>
    </div>
  );
};

export default Index;
