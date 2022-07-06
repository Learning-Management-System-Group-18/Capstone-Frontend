import React from "react";
import { FiSearch } from "react-icons/fi";
function searchLading() {
  return (
    <div>
      <div className="search">
        <FiSearch className="icon-search" />
        <input
          type="text"
          placeholder="search category"
          className="input-search"
        ></input>
      </div>
    </div>
  );
}

export default searchLading;
