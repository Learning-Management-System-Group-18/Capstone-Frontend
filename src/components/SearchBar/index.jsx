import React from 'react';
import { FiSearch } from 'react-icons/fi';
import './style.css';

const Index = () => {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="search category"
        className="input-search"
      ></input>
      <FiSearch className="icon-search" />
    </div>
  );
};

export default Index;
