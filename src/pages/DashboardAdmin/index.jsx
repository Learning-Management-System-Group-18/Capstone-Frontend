import React from 'react';
import {
  Card,
  Button,
  Table,
  NavbarAdmin,
  SearchBar,
  Notification,
} from '../../components';
import { employIcon, categoriesIcon, courseIcon } from '../../assets';
import './style.css';

const index = () => {
  const tHead = [
    'Category Name',
    'Description',
    'Course',
    'Employee',
    'Action',
  ];
  const data = [
    'Android Developer',
    'Android developer adalah course yang mempelajari cara mengembangkan aplikasi mobile dengan bahasa Dar...',
    '12 Course',
    '121 Employee',
    'Edit',
  ];

  return (
    <>
      <NavbarAdmin />
      <div className="background">
        <div className="nav-info">
          <div className="container d-flex justify-content-between p-3">
            <div className="nav-name">
              <span className="title-nav">Welcome back</span>
              <h5>Latifa Salsabila 👋</h5>
            </div>

            <div className="d-flex gap-3">
              <div className="search-item">
                <SearchBar />
              </div>
              <div className="notification-item">
                <Notification />
              </div>
            </div>
          </div>
        </div>
        <div className="container d-flex gap-4 mt-4">
          <Card icon={categoriesIcon} total={7} desc={'Total of Categories'} />
          <Card icon={courseIcon} total={7} desc={'Total of Course'} />
          <Card icon={employIcon} total={7} desc={'Total of Employess'} />
        </div>
        <div className="background-item">
          <div className="container d-flex justify-content-between mt-5">
            <div className="category-name">Category</div>
            <div className="button-add">
              {' '}
              <Button type={'btn-add'} />
            </div>
          </div>

          <div className="container mt-4">
            <Table tHead={tHead} data={data} />
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
