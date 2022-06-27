import React from 'react';
import {
  NavbarAdmin,
  SearchBar,
  Notification,
  PopupDetailOrder,
} from '../../components';
import { Dropdown, DropdownButton, Form } from 'react-bootstrap';
import { GoDash } from 'react-icons/go';
import { useState } from 'react';
import './style.css';

const Index = () => {
  const [showDetail, setShowDetail] = useState(false);

  const handleCloseDetail = () => setShowDetail(false);
  const detailShow = () => {
    setShowDetail(true);
  };
  return (
    <>
      <NavbarAdmin />
      <div className="background">
        <div className="nav-info">
          <div className="container d-flex justify-content-between py-3">
            <div className="nav-name">
              <span className="title-nav">Saturday</span>
              <h5 className="date-order-page neutral_3">23 Mei 2022</h5>
            </div>

            <div className="d-flex align-items-center gap-3">
              <SearchBar />

              <DropdownButton
                id="dropdown-basic-button"
                title="Filter By Date"
                align="end"
                className="filter-date bg_primary"
              >
                <Dropdown.Header>
                  <div className="d-flex gap-5">
                    <label className="ms-2 me-5">From</label>
                    <label className="ms-4 ps-2">To</label>
                  </div>
                  <div className="d-flex align-items-center justify-content-around">
                    <input
                      type="date"
                      className="input-filter-date"
                      placeholder="Select Date"
                    />
                    <GoDash />
                    <input
                      type="date"
                      className="input-filter-date"
                      placeholder="Select Date"
                    />
                  </div>
                </Dropdown.Header>
                <Dropdown.Header className="text-center">
                  <button className="btn btn-filter body_2">Today</button>
                </Dropdown.Header>
                <Dropdown.Header className="text-center">
                  <button className="btn btn-filter-secondary body_2">
                    Yesterday
                  </button>
                </Dropdown.Header>
                <Dropdown.Header className="text-center">
                  <button className="btn btn-filter-secondary body_2">
                    This Week
                  </button>
                </Dropdown.Header>
                <Dropdown.Header className="text-center">
                  <button className="btn btn-filter-secondary body_2">
                    This Month
                  </button>
                </Dropdown.Header>
              </DropdownButton>

              <Notification />
            </div>
          </div>
        </div>

        <div className="container background-table px-5 pt-2 pb-5 mt-5">
          <table className="table table-order table-hover mt-3">
            <thead>
              <tr className="thead neutral_3">
                <th scope="col" className="pb-2">
                  Order ID
                </th>
                <th scope="col" className="pb-2">
                  Date
                </th>
                <th scope="col" className="pb-2">
                  Email
                </th>
                <th scope="col" className="pb-2">
                  Course ID
                </th>
                <th scope="col" className="pb-2">
                  Course Name
                </th>
                <th scope="col" className="pb-2">
                  Category
                </th>
                <th scope="col" className="pb-2"></th>
              </tr>
            </thead>
            <tbody>
              <tr className="caption_1 neutral_3 data-order">
                <td scope="row" className="py-3 ps-3">
                  #1
                </td>
                <td className="py-3">28-08-2000</td>
                <td className="py-3">Latifa@gmail.com</td>
                <td className="py-3">223433</td>
                <td className="py-3">Android Development</td>
                <td className="py-3">Programming</td>
                <td className="py-3">
                  <button
                    className="btn detail bg_primary"
                    onClick={detailShow}
                  >
                    See Detail
                  </button>
                  <PopupDetailOrder
                    show={showDetail}
                    handleClose={handleCloseDetail}
                  />
                </td>
              </tr>
              <tr className="caption_1 neutral_3 data-order">
                <td scope="row" className="py-3 ps-3">
                  #1
                </td>
                <td className="py-3">28-08-2000</td>
                <td className="py-3">Latifa@gmail.com</td>
                <td className="py-3">223433</td>
                <td className="py-3">Android Development</td>
                <td className="py-3">Programming</td>
                <td className="py-3">
                  <button
                    className="btn detail bg_primary"
                    onClick={detailShow}
                  >
                    See Detail
                  </button>
                  <PopupDetailOrder
                    show={showDetail}
                    handleClose={handleCloseDetail}
                  />
                </td>
              </tr>
              <tr className="caption_1 neutral_3 data-order">
                <td scope="row" className="py-3 ps-3">
                  #1
                </td>
                <td className="py-3">28-08-2000</td>
                <td className="py-3">Latifa@gmail.com</td>
                <td className="py-3">223433</td>
                <td className="py-3">Android Development</td>
                <td className="py-3">Programming</td>
                <td className="py-3">
                  <button
                    className="btn detail bg_primary"
                    onClick={detailShow}
                  >
                    See Detail
                  </button>
                  <PopupDetailOrder
                    show={showDetail}
                    handleClose={handleCloseDetail}
                  />
                </td>
              </tr>
              <tr className="caption_1 neutral_3 data-order">
                <td scope="row" className="py-3 ps-3">
                  #1
                </td>
                <td className="py-3">28-08-2000</td>
                <td className="py-3">Latifa@gmail.com</td>
                <td className="py-3">223433</td>
                <td className="py-3">Android Development</td>
                <td className="py-3">Programming</td>
                <td className="py-3">
                  <button
                    className="btn detail bg_primary"
                    onClick={detailShow}
                  >
                    See Detail
                  </button>
                  <PopupDetailOrder
                    show={showDetail}
                    handleClose={handleCloseDetail}
                  />
                </td>
              </tr>
              <tr className="caption_1 neutral_3 data-order">
                <td scope="row" className="py-3 ps-3">
                  #1
                </td>
                <td className="py-3">28-08-2000</td>
                <td className="py-3">Latifa@gmail.com</td>
                <td className="py-3">223433</td>
                <td className="py-3">Android Development</td>
                <td className="py-3">Programming</td>
                <td className="py-3">
                  <button
                    className="btn detail bg_primary"
                    onClick={detailShow}
                  >
                    See Detail
                  </button>
                  <PopupDetailOrder
                    show={showDetail}
                    handleClose={handleCloseDetail}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Index;
