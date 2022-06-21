import React from 'react';
import { BsBellFill } from 'react-icons/bs';
import { BiRadioCircle } from 'react-icons/bi';
import './style.css';

const index = () => {
  return (
    <div className="notification">
      <BsBellFill className="icon-notif" />
      <BiRadioCircle className="circle-notif" />
    </div>
  );
};

export default index;
