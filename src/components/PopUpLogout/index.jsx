import React from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from '..';
import './style.css';
import { logoutpopupIcon } from '../../assets';
import { useNavigate } from 'react-router-dom';

const Index = ({ handleClose, show }) => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    handleClose();
    navigate('/login');
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body className="px-4 ">
          <div>
            <img
              src={logoutpopupIcon}
              alt="popuplogout"
              className="icon-popuplogout"
            />
            <div className="titlePoupLogout">Logout Account</div>
            <div className="content-popupLogout">
              Are you sure will logout? All your unsaved data will lost
            </div>
          </div>

          <div className="warpbtn-popuplogout">
            <Button type={'btn-popupcancel'} onClick={handleClose} />
            <button className="btn btn-logout" onClick={handleLogOut}>
              Logout
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Index;
