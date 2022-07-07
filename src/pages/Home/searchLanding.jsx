import React from "react";
import { FiSearch } from "react-icons/fi";
import { Dropdown } from "react-bootstrap";
function searchLading() {
  return (
    <div className="mt-5 search-main ">
      <div className="d-flex p-2">
        <div className="mt-2">
          <div className="searchNavUser">
            <FiSearch className="icon-searchusernav" />
            <input
              type="text"
              placeholder="search category"
              className="input-searchnav-user"
            ></input>
          </div>
        </div>

        <div className="mt-2">
          <Dropdown>
            <Dropdown.Toggle variant="white" id="dropdown-basic">
              Category
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="ms-4">
          <button className="search-button">Search</button>
        </div>
      </div>
    </div>
  );
}

export default searchLading;
